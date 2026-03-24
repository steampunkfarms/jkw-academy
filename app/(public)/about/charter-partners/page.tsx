import Link from "next/link";
import { prisma } from "@/lib/db";
import { Building2, ArrowRight, CheckCircle } from "lucide-react";

export const metadata = { title: "Charter Partners" };

export default async function CharterPartnersPage() {
  const charters = await prisma.charterSchool.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold font-heading mb-2">Charter School Partners</h1>
      <p className="text-muted-foreground mb-10">
        JKW Academy is an approved enrichment vendor for {charters.length}+ charter schools
        across San Diego and Southern California. Parents can use charter enrichment funds
        to pay for our classes.
      </p>

      {/* How It Works */}
      <section className="border border-border rounded-lg p-6 bg-card mb-10">
        <h2 className="font-bold mb-4">How Charter Funding Works</h2>
        {/* DATA PIPE: consider a visual flow diagram */}
        <ol className="space-y-3 text-sm text-muted-foreground">
          {[
            "Enroll your child in a partner charter school",
            "Verify JKW is an approved vendor with your charter",
            "Register for classes on JKW Academy and select 'Charter Funds' as payment",
            "Request an enrichment certificate or purchase order from your charter",
            "JKW receives the certificate and your child's spot is confirmed",
            "The charter pays JKW directly (net 30–60 days)",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-xs text-muted-foreground mt-4 border-t border-border pt-4">
          A $25 deposit per class is required to hold your child&apos;s spot while charter funds
          are processing. The deposit is refunded once the purchase order is approved.
        </p>
      </section>

      {/* Charter List */}
      <section>
        <h2 className="text-lg font-bold mb-4">Currently Partnered Charters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {charters.map((cs) => (
            <a
              key={cs.id}
              href={cs.website ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border rounded-lg p-4 bg-card hover:border-gold/50 transition-colors group"
            >
              {/* DATA PIPE: charter logo images */}
              <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
                <Building2 size={16} className="text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm group-hover:text-gold transition-colors truncate">
                  {cs.name}
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <CheckCircle size={10} className="text-science" /> Approved vendor
                </p>
              </div>
              <ArrowRight size={14} className="text-muted-foreground group-hover:text-gold transition-colors" />
            </a>
          ))}
        </div>
      </section>

      <div className="mt-10 text-center">
        <p className="text-sm text-muted-foreground mb-3">
          We always welcome creating relationships with new charters!
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy hover:bg-gold-hover transition-colors"
        >
          Partner With Us
        </Link>
      </div>
    </div>
  );
}
