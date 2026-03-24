import Link from "next/link";
import { prisma } from "@/lib/db";
import { STEAM_CATEGORIES } from "@/lib/steam-categories";
import {
  FlaskConical,
  Monitor,
  Wrench,
  Palette,
  Calculator,
  Heart,
  Dumbbell,
  ArrowRight,
  Star,
  Users,
  GraduationCap,
  Building2,
} from "lucide-react";

const CATEGORY_ICONS = { FlaskConical, Monitor, Wrench, Palette, Calculator, Heart, Dumbbell };

export default async function HomePage() {
  const [featuredClasses, testimonials, charterSchools] = await Promise.all([
    prisma.classTemplate.findMany({
      where: { isActive: true },
      include: { sections: { where: { status: { not: "CANCELLED" } }, take: 1 } },
      take: 6,
      orderBy: { title: "asc" },
    }),
    prisma.testimonial.findMany({
      where: { published: true, featured: true },
      take: 4,
    }),
    prisma.charterSchool.findMany({
      where: { isActive: true },
      orderBy: { name: "asc" },
    }),
  ]);

  return (
    <div>
      {/* ── Hero ── */}
      {/* DATA PIPE: hero background image, final tagline copy */}
      <section className="relative bg-navy text-white py-24 sm:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-heading">
            Bringing Innovation to{" "}
            <span className="text-gold">Homeschool Learning</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Hands-on STEAM classes in San Diego. Science, Technology, Engineering,
            Art, and Math for TK through 9th grade — where creativity meets curiosity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/programs"
              className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-navy hover:bg-gold-hover transition-colors"
            >
              Explore Programs
            </Link>
            <Link
              href="/register"
              className="rounded-full border border-gold/50 px-8 py-3 text-sm font-semibold text-gold hover:bg-gold/10 transition-colors"
            >
              Enroll Today
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      {/* DATA PIPE: real numbers from Jeremy */}
      <section className="bg-navy-dark py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: GraduationCap, value: "44+", label: "Classes" },
            { icon: Users, value: "500+", label: "Students Served" },
            { icon: Building2, value: "13+", label: "Charter Partners" },
            { icon: Star, value: "20+", label: "Years Teaching" },
          ].map((stat) => (
            <div key={stat.label}>
              <stat.icon size={24} className="text-gold mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STEAM Categories ── */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 font-heading">
            What We Teach
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {Object.entries(STEAM_CATEGORIES).map(([key, cat]) => {
              const Icon = CATEGORY_ICONS[cat.icon as keyof typeof CATEGORY_ICONS];
              return (
                <Link
                  key={key}
                  href={`/programs?category=${key}`}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border hover:border-gold/50 transition-colors bg-card text-center"
                >
                  {Icon && <Icon size={28} className={cat.color} />}
                  <span className="text-xs font-medium text-foreground">{cat.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Classes ── */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold font-heading">Featured Classes</h2>
            <Link href="/programs" className="text-sm text-gold hover:text-gold-hover flex items-center gap-1">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredClasses.map((cls) => {
              const cat = STEAM_CATEGORIES[cls.category as keyof typeof STEAM_CATEGORIES];
              const section = cls.sections[0];
              return (
                <Link
                  key={cls.id}
                  href={`/programs/${cls.slug}`}
                  className="rounded-lg border border-border bg-card p-5 hover:border-gold/50 transition-colors group"
                >
                  {/* DATA PIPE: class photo */}
                  <div className="h-36 rounded-md bg-muted mb-4 flex items-center justify-center">
                    <span className={`text-3xl font-bold opacity-20 ${cat?.color ?? ""}`}>
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
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                    <span className="text-sm font-semibold text-gold">
                      ${(cls.priceInCents / 100).toFixed(0)}
                    </span>
                    {section && (
                      <span className={`text-xs ${section.spotsRemaining <= 3 ? "text-destructive font-medium" : "text-muted-foreground"}`}>
                        {section.spotsRemaining <= 0
                          ? "Full — Waitlist"
                          : `${section.spotsRemaining} spots left`}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 px-4 bg-navy text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 font-heading">
            What Families Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.id}
                className="border border-white/10 rounded-lg p-6 bg-white/5"
              >
                <p className="text-white/80 text-sm leading-relaxed italic">
                  &ldquo;{t.text.length > 200 ? t.text.slice(0, 200) + "..." : t.text}&rdquo;
                </p>
                <footer className="mt-4 flex items-center gap-3">
                  {/* DATA PIPE: testimonial author photo */}
                  <div className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-bold">
                    {t.authorName.charAt(0)}
                  </div>
                  <span className="text-sm text-gold">{t.authorName}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Charter Partners ── */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-lg font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
            Trusted by {charterSchools.length}+ Charter Schools
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {charterSchools.map((cs) => (
              <a
                key={cs.id}
                href={cs.website ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md border border-border text-sm text-muted-foreground hover:text-gold hover:border-gold/50 transition-colors bg-card"
              >
                {/* DATA PIPE: charter logo images instead of text */}
                {cs.name}
              </a>
            ))}
          </div>
          <Link
            href="/about/charter-partners"
            className="inline-block mt-6 text-sm text-gold hover:text-gold-hover"
          >
            Learn about charter funding &rarr;
          </Link>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      {/* DATA PIPE: newsletter signup needs Resend integration (Session 10) */}
      <section className="py-16 px-4 bg-navy text-white text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold font-heading">Stay Connected</h2>
          <p className="text-white/70 text-sm">
            Get updates on new classes, camps, and a free STEAM challenge idea for your family.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
            />
            <button
              type="button"
              className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy hover:bg-gold-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
