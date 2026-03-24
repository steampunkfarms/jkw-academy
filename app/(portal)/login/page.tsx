import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata = { title: "Parent Login" };

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white font-heading">
            <span className="text-gold">JKW</span> Parent Portal
          </h1>
          <p className="text-white/60 text-sm mt-2">
            Sign in with your email to access your family dashboard
          </p>
        </div>

        {/* Magic link form — DATA PIPE: needs Auth.js v5 + Resend (Session 8) */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
          <div>
            <label className="text-xs text-white/60 block mb-1">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 rounded-md bg-gold py-2.5 text-sm font-semibold text-navy hover:bg-gold-hover transition-colors"
          >
            <Mail size={14} />
            Send Magic Link
          </button>
          <p className="text-xs text-white/40 text-center">
            We&apos;ll email you a secure login link — no password needed.
          </p>
        </div>

        {/* Demo shortcut — shows portal with sample data */}
        <div className="text-center">
          <Link
            href="/portal"
            className="text-xs text-gold hover:text-gold-hover"
          >
            Demo: View sample family portal &rarr;
          </Link>
        </div>

        <div className="text-center">
          <Link href="/" className="text-xs text-white/40 hover:text-white/60">
            &larr; Back to JKW Academy
          </Link>
        </div>
      </div>
    </div>
  );
}
