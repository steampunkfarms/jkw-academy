import { Heart, Gift, GraduationCap } from "lucide-react";

export const metadata = { title: "Donate — Scholarship Fund" };

// DATA PIPE: Square donation checkout (Session 6).
// Tax-deductible status — verify if JKW is 501(c)(3) or LLC.
// Scholarship copy — Jeremy to write or approve.

export default function DonatePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Heart size={32} className="mx-auto text-art mb-4" />
        <h1 className="text-3xl font-bold font-heading mb-2">Scholarship Fund</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Help us make STEAM education accessible to every child in San Diego,
          regardless of their family&apos;s financial situation.
        </p>
      </div>

      {/* Impact cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          { icon: Gift, amount: "$50", desc: "Covers supplies for one student for a semester" },
          { icon: GraduationCap, amount: "$260", desc: "Sponsors one class enrollment for a student" },
          { icon: Heart, amount: "$500", desc: "Full semester scholarship — two classes + membership" },
        ].map((tier) => (
          <div key={tier.amount} className="border border-border rounded-lg p-5 bg-card text-center">
            <tier.icon size={24} className="mx-auto text-gold mb-3" />
            <p className="text-2xl font-bold text-gold mb-1">{tier.amount}</p>
            <p className="text-xs text-muted-foreground">{tier.desc}</p>
          </div>
        ))}
      </div>

      {/* Donation form placeholder */}
      {/* DATA PIPE: Square donation checkout integration (Session 6) */}
      <div className="border border-border rounded-lg p-8 bg-card text-center">
        <h2 className="font-semibold mb-2">Make a Donation</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Online donation processing coming soon. In the meantime, please contact
          us directly to contribute to the scholarship fund.
        </p>
        <a
          href="mailto:jkwinnovations@gmail.com?subject=Scholarship%20Fund%20Donation"
          className="inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-navy hover:bg-gold-hover transition-colors"
        >
          Contact to Donate
        </a>
        {/* DATA PIPE: tax-deductible note if applicable */}
        <p className="text-xs text-muted-foreground mt-4">
          All donations go directly to student scholarships.
        </p>
      </div>
    </div>
  );
}
