import { prisma } from "@/lib/db";
import Link from "next/link";
import { Users, Calendar, CreditCard, Building2, GraduationCap, CheckCircle } from "lucide-react";

export const metadata = { title: "Parent Portal" };

export default async function PortalDashboard() {
  // Demo: load the first family with children and enrollments
  const family = await prisma.family.findFirst({
    include: {
      parent: { select: { name: true, email: true } },
      charterSchool: { select: { name: true } },
      membership: true,
      students: {
        include: {
          enrollments: {
            where: { status: { in: ["REGISTERED", "WAITLISTED"] } },
            include: {
              classSection: {
                include: {
                  template: { select: { title: true, category: true, priceInCents: true } },
                  instructor: { select: { name: true } },
                },
              },
            },
          },
        },
      },
    },
    orderBy: { createdAt: "asc" },
  });

  if (!family) {
    return <p className="text-muted-foreground">No family data found.</p>;
  }

  const totalEnrolled = family.students.reduce((sum, s) => sum + s.enrollments.length, 0);

  return (
    <div>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-xl font-bold font-heading">
          Welcome, {family.parent.name?.split(" ")[0] ?? "Parent"}
        </h1>
        <p className="text-muted-foreground text-sm">
          The {family.lastName} Family &middot; {family.parent.email}
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div className="border border-border rounded-lg p-4 bg-card">
          <Users size={14} className="text-gold mb-1" />
          <p className="text-xs text-muted-foreground">Children</p>
          <p className="text-2xl font-bold">{family.students.length}</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card">
          <GraduationCap size={14} className="text-science mb-1" />
          <p className="text-xs text-muted-foreground">Enrolled</p>
          <p className="text-2xl font-bold text-science">{totalEnrolled}</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card">
          <CheckCircle size={14} className="text-gold mb-1" />
          <p className="text-xs text-muted-foreground">Membership</p>
          <p className="text-sm font-bold text-gold">{family.membership?.status ?? "None"}</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card">
          <Building2 size={14} className="text-technology mb-1" />
          <p className="text-xs text-muted-foreground">Charter</p>
          <p className="text-sm font-bold text-technology truncate">{family.charterSchool?.name ?? "Self-Pay"}</p>
        </div>
      </div>

      {/* Children + Enrollments */}
      <div className="space-y-6">
        {family.students.map((student) => (
          <div key={student.id} className="border border-border rounded-lg bg-card overflow-hidden">
            <div className="bg-muted px-5 py-3 flex items-center justify-between">
              <div>
                <h2 className="font-semibold">{student.firstName} {student.lastName}</h2>
                <p className="text-xs text-muted-foreground">Grade {student.gradeLevel}</p>
              </div>
              <span className="text-xs text-muted-foreground">{student.enrollments.length} classes</span>
            </div>
            {student.enrollments.length === 0 ? (
              <div className="p-5 text-center">
                <p className="text-sm text-muted-foreground mb-2">Not enrolled in any classes yet</p>
                <Link href="/register" className="text-sm text-gold hover:text-gold-hover">
                  Browse programs &rarr;
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {student.enrollments.map((e) => (
                  <div key={e.id} className="px-5 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{e.classSection.template.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {e.classSection.dayOfWeek.charAt(0) + e.classSection.dayOfWeek.slice(1).toLowerCase()} {e.classSection.startTime}
                        {e.classSection.instructor && ` · ${e.classSection.instructor.name}`}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      e.status === "REGISTERED" ? "bg-science/20 text-science" : "bg-engineering/20 text-engineering"
                    }`}>
                      {e.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
        <Link href="/portal/schedule" className="border border-border rounded-lg p-4 bg-card hover:border-gold/50 transition-colors text-center">
          <Calendar size={20} className="mx-auto text-gold mb-2" />
          <p className="text-sm font-medium">Weekly Schedule</p>
        </Link>
        <Link href="/portal/payments" className="border border-border rounded-lg p-4 bg-card hover:border-gold/50 transition-colors text-center">
          <CreditCard size={20} className="mx-auto text-gold mb-2" />
          <p className="text-sm font-medium">Payments & Billing</p>
        </Link>
        <Link href="/register" className="border border-border rounded-lg p-4 bg-card hover:border-gold/50 transition-colors text-center">
          <GraduationCap size={20} className="mx-auto text-gold mb-2" />
          <p className="text-sm font-medium">Add More Classes</p>
        </Link>
      </div>
    </div>
  );
}
