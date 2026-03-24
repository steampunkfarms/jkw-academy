import { prisma } from "@/lib/db";
import { MessageCircle } from "lucide-react";

export const metadata = { title: "FAQ" };

export default async function FaqPage() {
  const faqs = await prisma.faqEntry.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold font-heading mb-2">Frequently Asked Questions</h1>
      <p className="text-muted-foreground mb-10">
        Everything you need to know about JKW Academy. Can&apos;t find your answer?
        Ask our AI assistant or contact us directly.
      </p>

      {/* DATA PIPE: AI chatbot integration (Session 11) */}
      <div className="border border-gold/30 rounded-lg p-6 bg-gold/5 mb-10">
        <div className="flex items-center gap-3 mb-3">
          <MessageCircle size={20} className="text-gold" />
          <h2 className="font-semibold">Ask Our AI Assistant</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Have a specific question? Our AI assistant knows all about JKW classes,
          charter funding, camps, and more.
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask anything about JKW Academy..."
            disabled
            className="flex-1 rounded-md border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground/50 disabled:opacity-50"
          />
          <button
            type="button"
            disabled
            className="rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-navy disabled:opacity-50"
          >
            Ask
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Coming soon — powered by Claude AI</p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.id}
            className="border border-border rounded-lg bg-card group"
          >
            <summary className="cursor-pointer px-5 py-4 font-medium text-sm list-none flex items-center justify-between">
              {faq.question}
              <span className="text-muted-foreground group-open:rotate-180 transition-transform">
                &#9662;
              </span>
            </summary>
            <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
