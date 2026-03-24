"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/programs", label: "Programs" },
  { href: "/camps", label: "Camps" },
  { href: "/tutoring", label: "Tutoring" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo — DATA PIPE: replace with real logo image */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-gold font-bold text-xl font-heading tracking-tight">JKW</span>
          <span className="text-white/90 text-sm font-medium hidden sm:inline">Academy</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/register"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy hover:bg-gold-hover transition-colors"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/80 hover:text-white"
          title={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-white/80 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/register"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 text-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy hover:bg-gold-hover transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  );
}
