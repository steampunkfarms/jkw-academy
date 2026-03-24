"use client";

import { useState, useEffect } from "react";
import { Users, GraduationCap, DollarSign, Building2, UserCheck, Clock, TrendingUp, AlertTriangle } from "lucide-react";

interface DashboardData {
  stats: {
    totalStudents: number;
    totalFamilies: number;
    totalEnrolled: number;
    totalWaitlisted: number;
    totalClasses: number;
    charterSchools: number;
    activeMemberships: number;
    estimatedRevenueCents: number;
  };
  recentEnrollments: {
    id: string;
    studentName: string;
    className: string;
    status: string;
    enrolledAt: string;
  }[];
  capacityData: {
    id: string;
    title: string;
    category: string;
    dayOfWeek: string;
    startTime: string;
    maxStudents: number;
    spotsRemaining: number;
    enrolled: number;
    fillRate: number;
  }[];
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/dashboard")
      .then((r) => r.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading || !data) {
    return <p className="text-muted-foreground text-sm py-12 text-center">Loading dashboard...</p>;
  }

  const { stats, recentEnrollments, capacityData } = data;

  const statCards = [
    { icon: Users, label: "Students", value: stats.totalStudents, color: "text-science" },
    { icon: UserCheck, label: "Enrolled", value: stats.totalEnrolled, color: "text-gold" },
    { icon: Clock, label: "Waitlisted", value: stats.totalWaitlisted, color: "text-engineering" },
    { icon: GraduationCap, label: "Classes", value: stats.totalClasses, color: "text-technology" },
    { icon: Building2, label: "Charters", value: stats.charterSchools, color: "text-character" },
    { icon: TrendingUp, label: "Memberships", value: stats.activeMemberships, color: "text-math" },
    { icon: Users, label: "Families", value: stats.totalFamilies, color: "text-fitness" },
    { icon: DollarSign, label: "Est. Revenue", value: `$${(stats.estimatedRevenueCents / 100).toLocaleString()}`, color: "text-gold" },
  ];

  // Classes at risk (high fill rate or full)
  const atRisk = capacityData.filter((c) => c.fillRate >= 80).sort((a, b) => b.fillRate - a.fillRate);

  return (
    <div className="max-w-6xl">
      <h1 className="text-xl font-bold tracking-tight mb-1">Dashboard</h1>
      <p className="text-muted-foreground text-sm mb-8">JKW Academy command center</p>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {statCards.map((s) => (
          <div key={s.label} className="border border-border rounded-lg p-4 bg-card">
            <div className="flex items-center gap-2 mb-1">
              <s.icon size={14} className={s.color} />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</span>
            </div>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Capacity Heatmap */}
        <div className="border border-border rounded-lg p-5 bg-card">
          <h2 className="font-semibold text-sm mb-4 flex items-center gap-2">
            <AlertTriangle size={14} className="text-engineering" />
            Class Capacity
          </h2>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {capacityData
              .sort((a, b) => b.fillRate - a.fillRate)
              .map((cls) => (
              <div key={cls.id} className="flex items-center gap-3">
                <div className="w-40 truncate text-xs font-medium">{cls.title}</div>
                <div className="flex-1">
                  <div className="h-4 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        cls.fillRate >= 90 ? "bg-destructive" : cls.fillRate >= 70 ? "bg-engineering" : "bg-science"
                      }`}
                      style={{ width: `${cls.fillRate}%` }}
                    />
                  </div>
                </div>
                <span className={`text-xs font-mono w-14 text-right ${
                  cls.fillRate >= 90 ? "text-destructive font-bold" : "text-muted-foreground"
                }`}>
                  {cls.enrolled}/{cls.maxStudents}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Enrollments */}
        <div className="border border-border rounded-lg p-5 bg-card">
          <h2 className="font-semibold text-sm mb-4">Recent Enrollments</h2>
          {recentEnrollments.length === 0 ? (
            <p className="text-xs text-muted-foreground py-4 text-center">No enrollments yet</p>
          ) : (
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {recentEnrollments.map((e) => (
                <div key={e.id} className="flex items-center justify-between text-sm border-b border-border pb-2 last:border-0">
                  <div>
                    <p className="font-medium">{e.studentName}</p>
                    <p className="text-xs text-muted-foreground">{e.className}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    e.status === "REGISTERED" ? "bg-science/20 text-science" : "bg-engineering/20 text-engineering"
                  }`}>
                    {e.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Classes at Risk */}
      {atRisk.length > 0 && (
        <div className="mt-6 border border-engineering/30 rounded-lg p-5 bg-engineering/5">
          <h2 className="font-semibold text-sm mb-3 text-engineering">Classes Filling Fast</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {atRisk.slice(0, 6).map((cls) => (
              <div key={cls.id} className="flex justify-between text-sm">
                <span>{cls.title}</span>
                <span className="font-mono text-xs">
                  {cls.spotsRemaining === 0 ? (
                    <span className="text-destructive font-bold">FULL</span>
                  ) : (
                    <span className="text-engineering">{cls.spotsRemaining} left</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
