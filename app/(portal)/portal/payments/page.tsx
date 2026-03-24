import { CreditCard, CheckCircle, Clock } from "lucide-react";

export const metadata = { title: "Payments" };

// DATA PIPE: real payment data from Payment model (Session 6)

export default function PaymentsPage() {
  return (
    <div>
      <h1 className="text-xl font-bold font-heading mb-2">Payments & Billing</h1>
      <p className="text-muted-foreground text-sm mb-6">Your payment history and outstanding balances</p>

      {/* Membership status */}
      <div className="border border-border rounded-lg p-5 bg-card mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle size={16} className="text-science" />
            <div>
              <p className="font-semibold">Family Membership</p>
              <p className="text-xs text-muted-foreground">Active through August 31, 2026</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-gold">$35/year</span>
        </div>
      </div>

      {/* Payment history placeholder */}
      <div className="border border-border rounded-lg bg-card">
        <div className="px-5 py-3 border-b border-border">
          <h2 className="font-semibold text-sm">Payment History</h2>
        </div>
        <div className="divide-y divide-border">
          {[
            { desc: "Spring 2026 — Math Help! (Noah)", amount: "$260", method: "Charter: Pacific Coast Academy", status: "Pending PO", icon: Clock, statusColor: "text-engineering" },
            { desc: "Spring 2026 — Art Fusion (Emma)", amount: "$280", method: "Charter: Pacific Coast Academy", status: "Pending PO", icon: Clock, statusColor: "text-engineering" },
            { desc: "Family Membership 2025-2026", amount: "$35", method: "Square", status: "Paid", icon: CheckCircle, statusColor: "text-science" },
          ].map((payment, i) => (
            <div key={i} className="px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard size={14} className="text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{payment.desc}</p>
                  <p className="text-xs text-muted-foreground">{payment.method}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">{payment.amount}</p>
                <p className={`text-xs flex items-center gap-1 justify-end ${payment.statusColor}`}>
                  <payment.icon size={10} /> {payment.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
