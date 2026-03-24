"use client";

import { useState, useEffect } from "react";

interface EnrollmentData {
  id: string;
  status: string;
  paymentMethod: string | null;
  enrolledAt: string;
  student: { firstName: string; lastName: string };
  classSection: { dayOfWeek: string; startTime: string; template: { title: string; priceInCents: number } };
}

export default function AdminEnrollmentsPage() {
  const [enrollments, setEnrollments] = useState<EnrollmentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    fetch("/api/admin/enrollments")
      .then((r) => r.json())
      .then(setEnrollments)
      .finally(() => setLoading(false));
  }, []);

  const filtered = filter === "ALL" ? enrollments : enrollments.filter((e) => e.status === filter);

  if (loading) return <p className="text-muted-foreground text-sm py-12 text-center">Loading enrollments...</p>;

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Enrollments</h1>
          <p className="text-muted-foreground text-sm mt-1">{enrollments.length} total</p>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {["ALL", "REGISTERED", "WAITLISTED", "DROPPED", "COMPLETED"].map((s) => (
          <button key={s} type="button" onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              filter === s ? "bg-gold text-navy border-gold" : "border-border text-muted-foreground hover:border-gold/50"
            }`}>
            {s === "ALL" ? "All" : s.charAt(0) + s.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      <div className="border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-card">
              <th className="text-left p-3 text-xs text-muted-foreground">Student</th>
              <th className="text-left p-3 text-xs text-muted-foreground">Class</th>
              <th className="text-left p-3 text-xs text-muted-foreground">Day/Time</th>
              <th className="text-center p-3 text-xs text-muted-foreground">Payment</th>
              <th className="text-center p-3 text-xs text-muted-foreground">Status</th>
              <th className="text-right p-3 text-xs text-muted-foreground">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((e) => (
              <tr key={e.id} className="border-b border-border last:border-b-0 hover:bg-card/50">
                <td className="p-3 font-medium">{e.student.firstName} {e.student.lastName}</td>
                <td className="p-3 text-muted-foreground">{e.classSection.template.title}</td>
                <td className="p-3 text-xs text-muted-foreground">
                  {e.classSection.dayOfWeek.charAt(0) + e.classSection.dayOfWeek.slice(1).toLowerCase()} {e.classSection.startTime}
                </td>
                <td className="p-3 text-center text-xs text-muted-foreground">{e.paymentMethod ?? "—"}</td>
                <td className="p-3 text-center">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    e.status === "REGISTERED" ? "bg-science/20 text-science"
                    : e.status === "WAITLISTED" ? "bg-engineering/20 text-engineering"
                    : "bg-muted text-muted-foreground"
                  }`}>
                    {e.status}
                  </span>
                </td>
                <td className="p-3 text-right font-mono">${(e.classSection.template.priceInCents / 100).toFixed(0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
