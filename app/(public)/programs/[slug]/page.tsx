import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { STEAM_CATEGORIES, type SteamCategoryKey } from "@/lib/steam-categories";
import { Clock, Users, DollarSign, Calendar, ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = await prisma.classTemplate.findUnique({ where: { slug } });
  if (!template) return { title: "Class Not Found" };
  return { title: template.title, description: template.description };
}

export default async function ClassDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const template = await prisma.classTemplate.findUnique({
    where: { slug },
    include: {
      sections: {
        where: { status: { not: "CANCELLED" } },
        include: { location: true, instructor: true },
        orderBy: [{ dayOfWeek: "asc" }, { startTime: "asc" }],
      },
    },
  });

  if (!template) notFound();

  const cat = STEAM_CATEGORIES[template.category as SteamCategoryKey];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/programs" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-gold mb-6">
        <ArrowLeft size={14} /> Back to Programs
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="md:col-span-2 space-y-6">
          {/* DATA PIPE: class hero photo */}
          <div className="h-56 rounded-lg bg-muted flex items-center justify-center">
            <span className={`text-6xl font-bold opacity-10 ${cat?.color ?? ""}`}>
              {cat?.label?.charAt(0) ?? "S"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cat?.bg ?? "bg-muted"} text-white`}>
              {cat?.label ?? template.category}
            </span>
            <span className="text-xs text-muted-foreground">
              Grades {template.gradeMin}–{template.gradeMax} (Ages {template.ageMin}–{template.ageMax})
            </span>
          </div>

          <h1 className="text-3xl font-bold font-heading">{template.title}</h1>

          <p className="text-muted-foreground leading-relaxed">{template.description}</p>

          {/* DATA PIPE: learning objectives */}
          <div className="border border-border rounded-lg p-5 bg-card">
            <h2 className="font-semibold mb-3">What Your Child Will Learn</h2>
            <p className="text-sm text-muted-foreground">
              Learning objectives will be added by the instructor. Check back soon for a detailed breakdown
              of skills and projects covered in this class.
            </p>
          </div>

          {/* DATA PIPE: "What You'll Build" gallery */}
          <div className="border border-border rounded-lg p-5 bg-card">
            <h2 className="font-semibold mb-3">What You&apos;ll Build</h2>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 rounded-md bg-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Photo {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DATA PIPE: materials needed */}
          {template.materialsNeeded && (
            <div className="border border-border rounded-lg p-5 bg-card">
              <h2 className="font-semibold mb-2">Materials Needed</h2>
              <p className="text-sm text-muted-foreground">{template.materialsNeeded}</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Price card */}
          <div className="border border-border rounded-lg p-5 bg-card space-y-4">
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-gold" />
              <span className="text-2xl font-bold text-gold">
                ${(template.priceInCents / 100).toFixed(0)}
              </span>
              <span className="text-sm text-muted-foreground">/semester</span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users size={14} />
                <span>Max {template.maxStudents} students</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock size={14} />
                <span>55-minute sessions</span>
              </div>
            </div>

            {/* DATA PIPE: Enroll button → Session 5 registration engine */}
            <Link
              href="/register"
              className="block w-full text-center rounded-md bg-gold py-2.5 text-sm font-semibold text-navy hover:bg-gold-hover transition-colors"
            >
              Enroll Now
            </Link>

            <p className="text-xs text-muted-foreground text-center">
              Charter funds accepted.{" "}
              <Link href="/about/charter-partners" className="text-gold hover:underline">
                Learn more
              </Link>
            </p>
          </div>

          {/* Sections */}
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Calendar size={14} /> Available Sections
            </h3>
            {template.sections.length === 0 ? (
              <p className="text-xs text-muted-foreground">No sections scheduled this semester.</p>
            ) : (
              <div className="space-y-3">
                {template.sections.map((sec) => (
                  <div key={sec.id} className="text-sm border-b border-border pb-3 last:border-0 last:pb-0">
                    <p className="font-medium">
                      {sec.dayOfWeek.charAt(0) + sec.dayOfWeek.slice(1).toLowerCase()}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {sec.startTime}–{sec.endTime} &middot; {sec.location.name}
                    </p>
                    {sec.instructor && (
                      <p className="text-xs text-muted-foreground">
                        {/* DATA PIPE: instructor photo */}
                        Instructor: {sec.instructor.name}
                      </p>
                    )}
                    <p className={`text-xs mt-1 ${sec.spotsRemaining <= 3 ? "text-destructive font-medium" : "text-muted-foreground"}`}>
                      {sec.spotsRemaining <= 0 ? "Full — Join Waitlist" : `${sec.spotsRemaining} spots remaining`}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
