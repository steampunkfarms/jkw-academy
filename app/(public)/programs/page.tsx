import Link from "next/link";
import { prisma } from "@/lib/db";
import { STEAM_CATEGORIES, type SteamCategoryKey } from "@/lib/steam-categories";

export const metadata = { title: "Programs" };

export default async function ProgramsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; day?: string }>;
}) {
  const params = await searchParams;
  const categoryFilter = params.category as SteamCategoryKey | undefined;
  const dayFilter = params.day;

  const templates = await prisma.classTemplate.findMany({
    where: {
      isActive: true,
      ...(categoryFilter ? { category: categoryFilter } : {}),
    },
    include: {
      sections: {
        where: {
          status: { not: "CANCELLED" },
          ...(dayFilter ? { dayOfWeek: dayFilter as never } : {}),
        },
        orderBy: { startTime: "asc" },
      },
    },
    orderBy: { title: "asc" },
  });

  // Only show templates that have matching sections
  const filtered = dayFilter
    ? templates.filter((t) => t.sections.length > 0)
    : templates;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold font-heading mb-2">Our Programs</h1>
      <p className="text-muted-foreground mb-8">
        44+ STEAM classes for TK through 9th grade. Filter by category or day to find the perfect fit.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/programs"
          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
            !categoryFilter ? "bg-gold text-navy border-gold" : "border-border text-muted-foreground hover:border-gold/50"
          }`}
        >
          All
        </Link>
        {Object.entries(STEAM_CATEGORIES).map(([key, cat]) => (
          <Link
            key={key}
            href={`/programs?category=${key}${dayFilter ? `&day=${dayFilter}` : ""}`}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              categoryFilter === key ? "bg-gold text-navy border-gold" : "border-border text-muted-foreground hover:border-gold/50"
            }`}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-xs text-muted-foreground py-1.5">Day:</span>
        {["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY"].map((d) => (
          <Link
            key={d}
            href={`/programs?day=${d}${categoryFilter ? `&category=${categoryFilter}` : ""}`}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              dayFilter === d ? "bg-navy text-white border-navy" : "border-border text-muted-foreground hover:border-gold/50"
            }`}
          >
            {d.charAt(0) + d.slice(1).toLowerCase()}
          </Link>
        ))}
        {dayFilter && (
          <Link
            href={`/programs${categoryFilter ? `?category=${categoryFilter}` : ""}`}
            className="px-3 py-1.5 text-xs text-destructive hover:underline"
          >
            Clear day
          </Link>
        )}
      </div>

      {/* Class Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((cls) => {
          const cat = STEAM_CATEGORIES[cls.category as SteamCategoryKey];
          const section = cls.sections[0];
          return (
            <Link
              key={cls.id}
              href={`/programs/${cls.slug}`}
              className="rounded-lg border border-border bg-card p-5 hover:border-gold/50 transition-colors group"
            >
              {/* DATA PIPE: class photo placeholder */}
              <div className="h-32 rounded-md bg-muted mb-4 flex items-center justify-center">
                <span className={`text-2xl font-bold opacity-15 ${cat?.color ?? ""}`}>
                  {cat?.label?.charAt(0) ?? "S"}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cat?.bg ?? "bg-muted"} text-white`}>
                  {cat?.label ?? cls.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {cls.gradeMin}–{cls.gradeMax}
                </span>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-gold transition-colors">
                {cls.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {cls.description}
              </p>
              {section && (
                <p className="text-xs text-muted-foreground mt-2">
                  {section.dayOfWeek.charAt(0) + section.dayOfWeek.slice(1).toLowerCase()} {section.startTime}–{section.endTime}
                </p>
              )}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                <span className="text-sm font-semibold text-gold">
                  ${(cls.priceInCents / 100).toFixed(0)}/semester
                </span>
                {section && (
                  <span className={`text-xs ${section.spotsRemaining <= 3 ? "text-destructive font-medium" : "text-muted-foreground"}`}>
                    {section.spotsRemaining <= 0 ? "Waitlist" : `${section.spotsRemaining} spots`}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No classes match your filters.{" "}
          <Link href="/programs" className="text-gold hover:underline">
            View all programs
          </Link>
        </p>
      )}
    </div>
  );
}
