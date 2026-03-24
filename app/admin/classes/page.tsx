"use client";

import { useState, useEffect } from "react";
import { STEAM_CATEGORIES, type SteamCategoryKey } from "@/lib/steam-categories";

interface ClassSection {
  id: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  maxStudents: number;
  spotsRemaining: number;
  status: string;
  template: { id: string; title: string; category: string; gradeMin: string; gradeMax: string; priceInCents: number };
  location: { name: string };
  instructor: { name: string } | null;
}

export default function AdminClassesPage() {
  const [sections, setSections] = useState<ClassSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/enrollment?semester=spring-2026")
      .then((r) => r.json())
      .then((data) => setSections(data.sections ?? []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-muted-foreground text-sm py-12 text-center">Loading classes...</p>;

  const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY"];

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Class Management</h1>
          <p className="text-muted-foreground text-sm mt-1">Spring 2026 — {sections.length} sections</p>
        </div>
        <button className="px-4 py-2 text-xs font-semibold rounded-md bg-gold text-navy hover:bg-gold-hover transition-colors">
          + New Class
        </button>
      </div>

      {days.map((day) => {
        const daySections = sections.filter((s) => s.dayOfWeek === day);
        if (daySections.length === 0) return null;
        return (
          <div key={day} className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
              {day.charAt(0) + day.slice(1).toLowerCase()}
            </h2>
            <div className="border border-border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-card">
                    <th className="text-left p-3 text-xs text-muted-foreground">Time</th>
                    <th className="text-left p-3 text-xs text-muted-foreground">Class</th>
                    <th className="text-left p-3 text-xs text-muted-foreground">Category</th>
                    <th className="text-left p-3 text-xs text-muted-foreground">Grades</th>
                    <th className="text-right p-3 text-xs text-muted-foreground">Price</th>
                    <th className="text-right p-3 text-xs text-muted-foreground">Capacity</th>
                    <th className="text-center p-3 text-xs text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {daySections.map((s) => {
                    const cat = STEAM_CATEGORIES[s.template.category as SteamCategoryKey];
                    const enrolled = s.maxStudents - s.spotsRemaining;
                    return (
                      <tr key={s.id} className="border-b border-border last:border-b-0 hover:bg-card/50">
                        <td className="p-3 font-mono text-xs">{s.startTime}–{s.endTime}</td>
                        <td className="p-3 font-medium">{s.template.title}</td>
                        <td className="p-3">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${cat?.bg ?? "bg-muted"} text-white`}>
                            {cat?.label ?? s.template.category}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-muted-foreground">{s.template.gradeMin}–{s.template.gradeMax}</td>
                        <td className="p-3 text-right font-mono">${(s.template.priceInCents / 100).toFixed(0)}</td>
                        <td className="p-3 text-right">
                          <span className={`font-mono ${s.spotsRemaining <= 3 ? "text-destructive font-bold" : ""}`}>
                            {enrolled}/{s.maxStudents}
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            s.status === "OPEN" ? "bg-science/20 text-science"
                            : s.status === "WAITLIST_ONLY" ? "bg-engineering/20 text-engineering"
                            : "bg-destructive/20 text-destructive"
                          }`}>
                            {s.status.replace("_", " ")}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}
