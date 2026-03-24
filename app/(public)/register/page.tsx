import { prisma } from "@/lib/db";
import { RegistrationWizard } from "./wizard";

export const metadata = { title: "Register" };

export default async function RegisterPage() {
  const semester = await prisma.semester.findFirst({
    where: { status: { in: ["REGISTRATION_OPEN", "IN_PROGRESS"] } },
    orderBy: { startDate: "desc" },
  });

  const sections = semester
    ? await prisma.classSection.findMany({
        where: { semesterId: semester.id, status: { not: "CANCELLED" } },
        include: {
          template: true,
          location: true,
          instructor: { select: { name: true } },
        },
        orderBy: [{ dayOfWeek: "asc" }, { startTime: "asc" }],
      })
    : [];

  const charters = await prisma.charterSchool.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold font-heading mb-2">Registration</h1>
      <p className="text-muted-foreground mb-8">
        {semester ? `Enrolling for ${semester.name}` : "Registration opening soon"}
      </p>
      <RegistrationWizard
        sections={JSON.parse(JSON.stringify(sections))}
        charters={charters}
        semesterName={semester?.name ?? ""}
      />
    </div>
  );
}
