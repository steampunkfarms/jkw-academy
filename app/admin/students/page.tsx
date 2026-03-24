"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

interface StudentData {
  id: string;
  firstName: string;
  lastName: string;
  gradeLevel: string;
  specialNeedsNotes: string | null;
  family: {
    parent: { name: string | null; email: string };
    charterSchool: { name: string } | null;
    membership: { status: string } | null;
  };
  enrollments: {
    status: string;
    classSection: { template: { title: string } };
  }[];
}

export default function AdminStudentsPage() {
  const [students, setStudents] = useState<StudentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/admin/students")
      .then((r) => r.json())
      .then(setStudents)
      .finally(() => setLoading(false));
  }, []);

  const filtered = students.filter((s) => {
    const q = search.toLowerCase();
    return (
      !q ||
      `${s.firstName} ${s.lastName}`.toLowerCase().includes(q) ||
      s.family.parent.email.toLowerCase().includes(q) ||
      s.family.charterSchool?.name.toLowerCase().includes(q)
    );
  });

  if (loading) return <p className="text-muted-foreground text-sm py-12 text-center">Loading students...</p>;

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Student Directory</h1>
          <p className="text-muted-foreground text-sm mt-1">{students.length} students enrolled</p>
        </div>
      </div>

      <div className="relative mb-6">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email, or charter..."
          className="w-full rounded-md border border-border bg-background pl-9 pr-3 py-2 text-sm"
        />
      </div>

      <div className="border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-card">
              <th className="text-left p-3 text-xs text-muted-foreground">Student</th>
              <th className="text-left p-3 text-xs text-muted-foreground">Grade</th>
              <th className="text-left p-3 text-xs text-muted-foreground">Parent</th>
              <th className="text-left p-3 text-xs text-muted-foreground">Charter</th>
              <th className="text-center p-3 text-xs text-muted-foreground">Classes</th>
              <th className="text-center p-3 text-xs text-muted-foreground">Membership</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-b border-border last:border-b-0 hover:bg-card/50">
                <td className="p-3">
                  <span className="font-medium">{s.firstName} {s.lastName}</span>
                  {s.specialNeedsNotes && (
                    <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full bg-art/20 text-art" title={s.specialNeedsNotes}>
                      Accommodations
                    </span>
                  )}
                </td>
                <td className="p-3 text-muted-foreground">{s.gradeLevel}</td>
                <td className="p-3">
                  <p className="text-xs">{s.family.parent.name}</p>
                  <p className="text-xs text-muted-foreground">{s.family.parent.email}</p>
                </td>
                <td className="p-3 text-xs text-muted-foreground">
                  {s.family.charterSchool?.name ?? "Self-pay"}
                </td>
                <td className="p-3 text-center">
                  <span className="font-mono">{s.enrollments.length}</span>
                </td>
                <td className="p-3 text-center">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    s.family.membership?.status === "ACTIVE" ? "bg-science/20 text-science" : "bg-muted text-muted-foreground"
                  }`}>
                    {s.family.membership?.status ?? "None"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
