import Link from "next/link";
import { BookOpen, Target, TrendingUp } from "lucide-react";

export const metadata = { title: "Tutoring" };

// DATA PIPE: tutoring details (pricing, availability, subjects) from Jeremy.
// Contact form needs Resend integration (Session 10).

export default function TutoringPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold font-heading mb-2">Tutoring</h1>
      <p className="text-muted-foreground mb-10">
        Personalized one-on-one and small group tutoring across all STEAM subjects.
        Whether your child is falling behind or racing ahead, we meet them where they are.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { icon: Target, title: "Catch-Up", desc: "Help students who are struggling with core subjects get back on track with targeted support." },
          { icon: BookOpen, title: "Enrichment", desc: "Go deeper into subjects your child loves. Advanced projects, competitions, and exploration." },
          { icon: TrendingUp, title: "Test Prep", desc: "Prepare for standardized tests, charter school assessments, and academic milestones." },
        ].map((item) => (
          <div key={item.title} className="border border-border rounded-lg p-5 bg-card">
            <item.icon size={24} className="text-gold mb-3" />
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* DATA PIPE: pricing table, availability schedule */}
      <div className="border border-border rounded-lg p-6 bg-muted text-center">
        <p className="text-muted-foreground text-sm mb-4">
          Tutoring availability and pricing details coming soon.
          Contact us directly to schedule a session.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy hover:bg-gold-hover transition-colors"
        >
          Request Tutoring
        </Link>
      </div>
    </div>
  );
}
