import Link from "next/link";
import { Tent, Calendar, Sun, Snowflake, Flower2 } from "lucide-react";

export const metadata = { title: "Camps" };

// DATA PIPE: entire page — needs CampTemplate/CampSession models (Phase 2)
// and real camp data from Jeremy. Currently a shell with placeholder seasons.

const CAMP_SEASONS = [
  { icon: Flower2, name: "Spring Break Camp 2026", dates: "March 23–26, 2026", status: "Registering Now", color: "text-science" },
  { icon: Sun, name: "Summer STEAM Camp 2026", dates: "June–August 2026", status: "Coming Soon", color: "text-engineering" },
  { icon: Snowflake, name: "Winter Break Camp 2026", dates: "December 2026", status: "Coming Soon", color: "text-technology" },
];

export default function CampsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold font-heading mb-2">STEAM Camps</h1>
      <p className="text-muted-foreground mb-10">
        Week-long themed STEAM camps during every school break. Hands-on projects,
        team challenges, and unforgettable experiences.
      </p>

      <div className="space-y-6">
        {CAMP_SEASONS.map((camp) => (
          <div key={camp.name} className="border border-border rounded-lg p-6 bg-card flex items-start gap-4">
            <div className={`p-3 rounded-lg bg-muted ${camp.color}`}>
              <camp.icon size={24} />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{camp.name}</h2>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <Calendar size={12} /> {camp.dates}
              </p>
              <span className={`inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full ${
                camp.status === "Registering Now" ? "bg-science text-white" : "bg-muted text-muted-foreground"
              }`}>
                {camp.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border border-border rounded-lg p-6 bg-muted text-center">
        <Tent size={32} className="mx-auto text-muted-foreground mb-3" />
        <p className="text-muted-foreground text-sm">
          Camp details, daily itineraries, and registration will be available here soon.
        </p>
        <Link href="/contact" className="inline-block mt-3 text-sm text-gold hover:text-gold-hover">
          Contact us for camp info &rarr;
        </Link>
      </div>
    </div>
  );
}
