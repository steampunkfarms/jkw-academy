import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const students = await prisma.student.findMany({
    include: {
      family: {
        include: {
          parent: { select: { email: true, name: true } },
          charterSchool: { select: { name: true } },
          membership: { select: { status: true } },
        },
      },
      enrollments: {
        where: { status: { in: ["REGISTERED", "WAITLISTED"] } },
        include: { classSection: { include: { template: { select: { title: true } } } } },
      },
    },
    orderBy: [{ lastName: "asc" }, { firstName: "asc" }],
  });

  return NextResponse.json(students);
}
