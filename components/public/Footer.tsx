import Link from "next/link";

const FOOTER_LINKS = {
  Programs: [
    { href: "/programs", label: "Class Catalog" },
    { href: "/camps", label: "Camps" },
    { href: "/tutoring", label: "Tutoring" },
    { href: "/register", label: "Registration" },
  ],
  About: [
    { href: "/about", label: "Our Story" },
    { href: "/about/charter-partners", label: "Charter Partners" },
    { href: "/donate", label: "Scholarship Fund" },
    { href: "/faq", label: "FAQ" },
  ],
  Connect: [
    { href: "/contact", label: "Contact Us" },
    { href: "https://www.instagram.com/jkwinnovationsllc/", label: "Instagram" },
    { href: "https://www.facebook.com/JKWInnovationsLLC", label: "Facebook" },
    { href: "/accessibility", label: "Accessibility" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <span className="text-gold font-bold text-xl font-heading">JKW</span>
            <span className="text-white/90 text-sm ml-1">Academy</span>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">
              San Diego&apos;s premier STEAM-focused homeschool enrichment center.
              Hands-on learning for TK through 9th grade.
            </p>
            <p className="text-white/40 text-xs mt-4">
              {/* DATA PIPE: address from Location model */}
              1331 Cuyamaca St, Suite A<br />
              El Cajon, CA 92020
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-gold transition-colors"
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} JKW Innovations LLC. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            {/* DATA PIPE: email from SiteSetting or hardcode */}
            <a href="mailto:jkwinnovations@gmail.com" className="hover:text-gold transition-colors">
              jkwinnovations@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
