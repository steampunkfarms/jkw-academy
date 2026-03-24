import { prisma } from "@/lib/db";
import { DollarSign, TrendingUp, Building2, CreditCard } from "lucide-react";

export default async function AdminRevenuePage() {
  const enrollments = await prisma.enrollment.findMany({
    where: { status: "REGISTERED" },
    include: { classSection: { include: { template: { select: { priceInCents: true, category: true } } } } },
  });

  const totalRevenueCents = enrollments.reduce((sum, e) => sum + e.classSection.template.priceInCents, 0);
  const byMethod: Record<string, number> = {};
  const byCategory: Record<string, number> = {};

  for (const e of enrollments) {
    const method = e.paymentMethod ?? "UNKNOWN";
    byMethod[method] = (byMethod[method] ?? 0) + e.classSection.template.priceInCents;
    const cat = e.classSection.template.category;
    byCategory[cat] = (byCategory[cat] ?? 0) + e.classSection.template.priceInCents;
  }

  const membershipRevenue = await prisma.membership.count({ where: { status: "ACTIVE" } });

  return (
    <div className="max-w-6xl">
      <h1 className="text-xl font-bold tracking-tight mb-1">Revenue</h1>
      <p className="text-muted-foreground text-sm mb-8">Financial overview for Spring 2026</p>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div className="border border-border rounded-lg p-4 bg-card">
          <DollarSign size={14} className="text-gold mb-1" />
          <p className="text-xs text-muted-foreground">Total Revenue</p>
          <p className="text-2xl font-bold text-gold">${(totalRevenueCents / 100).toLocaleString()}</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card">
          <TrendingUp size={14} className="text-science mb-1" />
          <p className="text-xs text-muted-foreground">Enrollments</p>
          <p className="text-2xl font-bold text-science">{enrollments.length}</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card">
          <Building2 size={14} className="text-technology mb-1" />
          <p className="text-xs text-muted-foreground">Avg/Student</p>
          <p className="text-2xl font-bold text-technology">
            ${enrollments.length > 0 ? ((totalRevenueCents / enrollments.length) / 100).toFixed(0) : "0"}
          </p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card">
          <CreditCard size={14} className="text-character mb-1" />
          <p className="text-xs text-muted-foreground">Memberships</p>
          <p className="text-2xl font-bold text-character">${(membershipRevenue * 35).toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* By Payment Method */}
        <div className="border border-border rounded-lg p-5 bg-card">
          <h2 className="font-semibold text-sm mb-4">Revenue by Payment Method</h2>
          {Object.entries(byMethod).length === 0 ? (
            <p className="text-xs text-muted-foreground">No data yet — will populate as enrollments come in</p>
          ) : (
            <div className="space-y-3">
              {Object.entries(byMethod).sort((a, b) => b[1] - a[1]).map(([method, cents]) => (
                <div key={method} className="flex items-center justify-between">
                  <span className="text-sm">{method}</span>
                  <span className="text-sm font-mono font-semibold">${(cents / 100).toLocaleString()}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* By Category */}
        <div className="border border-border rounded-lg p-5 bg-card">
          <h2 className="font-semibold text-sm mb-4">Revenue by STEAM Category</h2>
          {Object.entries(byCategory).length === 0 ? (
            <p className="text-xs text-muted-foreground">No data yet</p>
          ) : (
            <div className="space-y-3">
              {Object.entries(byCategory).sort((a, b) => b[1] - a[1]).map(([cat, cents]) => (
                <div key={cat} className="flex items-center justify-between">
                  <span className="text-sm">{cat}</span>
                  <span className="text-sm font-mono font-semibold">${(cents / 100).toLocaleString()}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
