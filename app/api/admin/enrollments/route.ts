import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const enrollments = await prisma.enrollment.findMany({
    include: {
      student: { select: { firstName: true, lastName: true } },
      classSection: {
        include: { template: { select: { title: true, priceInCents: true } } },
        select: { dayOfWeek: true, startTime: true, template: true },
      },
    },
    orderBy: { enrolledAt: "desc" },
  });

  return NextResponse.json(enrollments);
}
