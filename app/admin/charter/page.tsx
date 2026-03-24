"use client";

import { useState, useEffect } from "react";
import { Building2, DollarSign, Clock, CheckCircle, AlertTriangle } from "lucide-react";

interface CharterSummary {
  id: string;
  name: string;
  paymentTermDays: number;
  familyCount: number;
  studentCount: number;
  enrollmentCount: number;
  totalOwedCents: number;
  totalPaidCents: number;
  pendingPOs: number;
  approvedPOs: number;
  enrollments: {
    id: string;
    studentName: string;
    className: string;
    poNumber: string | null;
    poStatus: string;
    amountCents: number;
  }[];
}

const PO_STATUS_STYLES: Record<string, string> = {
  REQUESTED: "bg-muted text-muted-foreground",
  SUBMITTED: "bg-technology/20 text-technology",
  APPROVED: "bg-science/20 text-science",
  PAID: "bg-gold/20 text-gold",
  DENIED: "bg-destructive/20 text-destructive",
};

export default function AdminCharterPage() {
  const [charters, setCharters] = useState<CharterSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/charter")
      .then((r) => r.json())
      .then(setCharters)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-muted-foreground text-sm py-12 text-center">Loading charter data...</p>;

  const totalOwed = charters.reduce((sum, c) => sum + c.totalOwedCents, 0);
  const totalPaid = charters.reduce((sum, c) => sum + c.totalPaidCents, 0);
  const totalPending = charters.reduce((sum, c) => sum + c.pendingPOs, 0);

  return (
    <div className="max-w-6xl">
      <h1 className="text-xl font-bold tracking-tight mb-1">Charter Fund Orchestrator</h1>
      <p className="text-muted-foreground text-sm mb-8">Track purchase orders, receivables, and payments across all charter partners</p>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div className="border border-border rounded-lg p-4 bg-card">
          <div className="flex items-center gap-2 mb-1">
            <Building2 size={14} className="text-character" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Partners</span>
          </div>
          <p className="text-2xl font-bold text-character">{charters.length}</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign size={14} className="text-engineering" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Outstanding</span>
          </div>
          <p className="text-2xl font-bold text-engineering">${(totalOwed / 100).toLocaleString()}</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle size={14} className="text-gold" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Collected</span>
          </div>
          <p className="text-2xl font-bold text-gold">${(totalPaid / 100).toLocaleString()}</p>
        </div>
        <div className="border border-border rounded-lg p-4 bg-card">
          <div className="flex items-center gap-2 mb-1">
            <Clock size={14} className="text-technology" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Pending POs</span>
          </div>
          <p className="text-2xl font-bold text-technology">{totalPending}</p>
        </div>
      </div>

      {/* Charter list */}
      <div className="space-y-4">
        {charters.map((cs) => (
          <div key={cs.id} className="border border-border rounded-lg bg-card overflow-hidden">
            <button
              type="button"
              onClick={() => setExpanded(expanded === cs.id ? null : cs.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <Building2 size={16} className="text-muted-foreground" />
                <div>
                  <p className="font-semibold">{cs.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {cs.familyCount} families &middot; {cs.studentCount} students &middot; Net {cs.paymentTermDays} days
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-right">
                {cs.pendingPOs > 0 && (
                  <span className="flex items-center gap-1 text-xs text-engineering">
                    <AlertTriangle size={10} /> {cs.pendingPOs} pending
                  </span>
                )}
                <div>
                  <p className="text-sm font-semibold text-gold">${(cs.totalOwedCents / 100).toLocaleString()}</p>
                  <p className="text-[10px] text-muted-foreground">outstanding</p>
                </div>
                <span className={`transition-transform ${expanded === cs.id ? "rotate-180" : ""}`}>&#9662;</span>
              </div>
            </button>

            {expanded === cs.id && cs.enrollments.length > 0 && (
              <div className="border-t border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 text-xs text-muted-foreground">Student</th>
                      <th className="text-left p-3 text-xs text-muted-foreground">Class</th>
                      <th className="text-left p-3 text-xs text-muted-foreground">PO #</th>
                      <th className="text-center p-3 text-xs text-muted-foreground">Status</th>
                      <th className="text-right p-3 text-xs text-muted-foreground">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cs.enrollments.map((e) => (
                      <tr key={e.id} className="border-t border-border">
                        <td className="p-3">{e.studentName}</td>
                        <td className="p-3 text-muted-foreground">{e.className}</td>
                        <td className="p-3 font-mono text-xs">{e.poNumber ?? "—"}</td>
                        <td className="p-3 text-center">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${PO_STATUS_STYLES[e.poStatus] ?? ""}`}>
                            {e.poStatus}
                          </span>
                        </td>
                        <td className="p-3 text-right font-mono">${(e.amountCents / 100).toFixed(0)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {expanded === cs.id && cs.enrollments.length === 0 && (
              <div className="border-t border-border p-4 text-center">
                <p className="text-xs text-muted-foreground">No charter-funded enrollments yet for this school</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
