import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// GET — fetch available classes for enrollment wizard
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const semesterSlug = searchParams.get("semester") ?? "spring-2026";

  const semester = await prisma.semester.findUnique({ where: { slug: semesterSlug } });
  if (!semester) return NextResponse.json({ error: "Semester not found" }, { status: 404 });

  const sections = await prisma.classSection.findMany({
    where: { semesterId: semester.id, status: { not: "CANCELLED" } },
    include: {
      template: true,
      location: true,
      instructor: { select: { name: true } },
    },
    orderBy: [{ dayOfWeek: "asc" }, { startTime: "asc" }],
  });

  return NextResponse.json({ semester, sections });
}

// POST — create enrollment(s)
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { familyId, enrollments } = body as {
    familyId: string;
    enrollments: { studentId: string; classSectionId: string; paymentMethod: string }[];
  };

  if (!familyId || !enrollments?.length) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  const results = [];

  for (const enrollment of enrollments) {
    const section = await prisma.classSection.findUnique({
      where: { id: enrollment.classSectionId },
    });

    if (!section) continue;

    const isWaitlist = section.spotsRemaining <= 0;

    const created = await prisma.enrollment.create({
      data: {
        studentId: enrollment.studentId,
        classSectionId: enrollment.classSectionId,
        status: isWaitlist ? "WAITLISTED" : "REGISTERED",
        paymentMethod: enrollment.paymentMethod as never,
      },
    });

    if (!isWaitlist) {
      await prisma.classSection.update({
        where: { id: enrollment.classSectionId },
        data: { spotsRemaining: { decrement: 1 } },
      });
    } else {
      const waitlistCount = await prisma.waitlist.count({
        where: { classSectionId: enrollment.classSectionId },
      });
      await prisma.waitlist.create({
        data: {
          studentId: enrollment.studentId,
          classSectionId: enrollment.classSectionId,
          position: waitlistCount + 1,
        },
      });
    }

    results.push(created);
  }

  return NextResponse.json({ enrollments: results }, { status: 201 });
}
