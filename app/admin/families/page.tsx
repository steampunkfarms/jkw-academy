"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

interface FamilyData {
  id: string;
  lastName: string;
  phone: string | null;
  city: string | null;
  parent: { name: string | null; email: string };
  charterSchool: { name: string } | null;
  membership: { status: string } | null;
  students: { firstName: string; lastName: string; gradeLevel: string }[];
}

export default function AdminFamiliesPage() {
  const [families, setFamilies] = useState<FamilyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/admin/families")
      .then((r) => r.json())
      .then(setFamilies)
      .finally(() => setLoading(false));
  }, []);

  const filtered = families.filter((f) => {
    const q = search.toLowerCase();
    return !q || f.lastName.toLowerCase().includes(q) || f.parent.email.toLowerCase().includes(q);
  });

  if (loading) return <p className="text-muted-foreground text-sm py-12 text-center">Loading families...</p>;

  return (
    <div className="max-w-6xl">
      <h1 className="text-xl font-bold tracking-tight mb-1">Families</h1>
      <p className="text-muted-foreground text-sm mb-6">{families.length} registered families</p>

      <div className="relative mb-6">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or email..."
          className="w-full rounded-md border border-border bg-background pl-9 pr-3 py-2 text-sm" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((f) => (
          <div key={f.id} className="border border-border rounded-lg p-4 bg-card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">The {f.lastName} Family</h3>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                f.membership?.status === "ACTIVE" ? "bg-science/20 text-science" : "bg-muted text-muted-foreground"
              }`}>
                {f.membership?.status ?? "No Membership"}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{f.parent.name}</p>
            <p className="text-xs text-muted-foreground">{f.parent.email}</p>
            {f.phone && <p className="text-xs text-muted-foreground">{f.phone}</p>}
            {f.charterSchool && (
              <p className="text-xs text-technology mt-1">{f.charterSchool.name}</p>
            )}
            <div className="mt-3 pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground mb-1">Children:</p>
              {f.students.map((s, i) => (
                <p key={i} className="text-xs">
                  {s.firstName} {s.lastName} <span className="text-muted-foreground">({s.gradeLevel})</span>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
