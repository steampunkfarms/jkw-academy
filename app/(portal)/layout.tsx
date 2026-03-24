import Link from "next/link";
import { Home, Calendar, CreditCard, Mail, Settings, LogOut } from "lucide-react";

const PORTAL_NAV = [
  { href: "/portal", label: "Dashboard", icon: Home },
  { href: "/portal/schedule", label: "Schedule", icon: Calendar },
  { href: "/portal/payments", label: "Payments", icon: CreditCard },
  { href: "/portal/messages", label: "Messages", icon: Mail },
];

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-navy border-b border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-14">
          <Link href="/portal" className="flex items-center gap-2">
            <span className="text-gold font-bold text-lg font-heading">JKW</span>
            <span className="text-white/80 text-sm">Parent Portal</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/portal" className="text-xs text-white/60 hover:text-gold flex items-center gap-1">
              <Settings size={12} /> Account
            </Link>
            <Link href="/" className="text-xs text-white/60 hover:text-gold flex items-center gap-1">
              <LogOut size={12} /> Exit
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex gap-1 mb-6 overflow-x-auto">
          {PORTAL_NAV.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors whitespace-nowrap"
            >
              <Icon size={14} />
              {label}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
