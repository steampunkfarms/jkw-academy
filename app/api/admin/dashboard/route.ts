import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const [
    totalStudents,
    totalFamilies,
    totalEnrolled,
    totalWaitlisted,
    totalClasses,
    charterSchools,
    activeMemberships,
    recentEnrollments,
    classSections,
  ] = await Promise.all([
    prisma.student.count(),
    prisma.family.count(),
    prisma.enrollment.count({ where: { status: "REGISTERED" } }),
    prisma.enrollment.count({ where: { status: "WAITLISTED" } }),
    prisma.classTemplate.count({ where: { isActive: true } }),
    prisma.charterSchool.count({ where: { isActive: true } }),
    prisma.membership.count({ where: { status: "ACTIVE" } }),
    prisma.enrollment.findMany({
      take: 10,
      orderBy: { enrolledAt: "desc" },
      include: {
        student: { select: { firstName: true, lastName: true } },
        classSection: { include: { template: { select: { title: true } } } },
      },
    }),
    prisma.classSection.findMany({
      where: { status: { not: "CANCELLED" } },
      include: { template: { select: { title: true, category: true, priceInCents: true } } },
      orderBy: [{ dayOfWeek: "asc" }, { startTime: "asc" }],
    }),
  ]);

  // Revenue estimate (all registered enrollments * class price)
  const enrollmentsWithPrice = await prisma.enrollment.findMany({
    where: { status: "REGISTERED" },
    include: { classSection: { include: { template: { select: { priceInCents: true } } } } },
  });
  const estimatedRevenueCents = enrollmentsWithPrice.reduce(
    (sum, e) => sum + (e.classSection.template.priceInCents ?? 0), 0
  );

  // Capacity data
  const capacityData = classSections.map((s) => ({
    id: s.id,
    title: s.template.title,
    category: s.template.category,
    dayOfWeek: s.dayOfWeek,
    startTime: s.startTime,
    maxStudents: s.maxStudents,
    spotsRemaining: s.spotsRemaining,
    enrolled: s.maxStudents - s.spotsRemaining,
    fillRate: Math.round(((s.maxStudents - s.spotsRemaining) / s.maxStudents) * 100),
  }));

  return NextResponse.json({
    stats: {
      totalStudents,
      totalFamilies,
      totalEnrolled,
      totalWaitlisted,
      totalClasses,
      charterSchools,
      activeMemberships,
      estimatedRevenueCents,
    },
    recentEnrollments: recentEnrollments.map((e) => ({
      id: e.id,
      studentName: `${e.student.firstName} ${e.student.lastName}`,
      className: e.classSection.template.title,
      status: e.status,
      enrolledAt: e.enrolledAt,
    })),
    capacityData,
  });
}
