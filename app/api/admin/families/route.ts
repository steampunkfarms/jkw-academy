import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const families = await prisma.family.findMany({
    include: {
      parent: { select: { name: true, email: true } },
      charterSchool: { select: { name: true } },
      membership: { select: { status: true } },
      students: { select: { firstName: true, lastName: true, gradeLevel: true } },
    },
    orderBy: { lastName: "asc" },
  });

  return NextResponse.json(families);
}
