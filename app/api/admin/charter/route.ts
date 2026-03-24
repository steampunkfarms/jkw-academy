import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const charters = await prisma.charterSchool.findMany({
    where: { isActive: true },
    include: {
      families: {
        include: {
          students: { select: { id: true, firstName: true, lastName: true } },
          parent: { select: { name: true, email: true } },
        },
      },
      charterEnrollments: {
        include: {
          enrollment: {
            include: {
              student: { select: { firstName: true, lastName: true } },
              classSection: { include: { template: { select: { title: true, priceInCents: true } } } },
            },
          },
        },
      },
    },
    orderBy: { name: "asc" },
  });

  const summary = charters.map((cs) => {
    const enrollments = cs.charterEnrollments;
    const totalOwed = enrollments
      .filter((e) => e.poStatus !== "PAID" && e.poStatus !== "DENIED")
      .reduce((sum, e) => sum + (e.amountInCents ?? e.enrollment.classSection.template.priceInCents), 0);
    const totalPaid = enrollments
      .filter((e) => e.poStatus === "PAID")
      .reduce((sum, e) => sum + (e.amountInCents ?? 0), 0);
    const pendingPOs = enrollments.filter((e) => e.poStatus === "REQUESTED" || e.poStatus === "SUBMITTED").length;
    const approvedPOs = enrollments.filter((e) => e.poStatus === "APPROVED").length;

    return {
      id: cs.id,
      name: cs.name,
      slug: cs.slug,
      paymentTermDays: cs.paymentTermDays,
      familyCount: cs.families.length,
      studentCount: cs.families.reduce((sum, f) => sum + f.students.length, 0),
      enrollmentCount: enrollments.length,
      totalOwedCents: totalOwed,
      totalPaidCents: totalPaid,
      pendingPOs,
      approvedPOs,
      enrollments: enrollments.map((e) => ({
        id: e.id,
        studentName: `${e.enrollment.student.firstName} ${e.enrollment.student.lastName}`,
        className: e.enrollment.classSection.template.title,
        poNumber: e.purchaseOrderNumber,
        poStatus: e.poStatus,
        amountCents: e.amountInCents ?? e.enrollment.classSection.template.priceInCents,
      })),
    };
  });

  return NextResponse.json(summary);
}
