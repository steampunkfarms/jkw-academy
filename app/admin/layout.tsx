import Link from "next/link";
import { cookies } from "next/headers";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  CalendarDays,
  Building2,
  DollarSign,
  Settings,
} from "lucide-react";

const ADMIN_NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/classes", label: "Classes", icon: GraduationCap },
  { href: "/admin/enrollments", label: "Enrollments", icon: CalendarDays },
  { href: "/admin/students", label: "Students", icon: Users },
  { href: "/admin/charter", label: "Charter Funds", icon: Building2 },
  { href: "/admin/revenue", label: "Revenue", icon: DollarSign },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const adminToken = cookieStore.get("jkw-admin")?.value;
  const expectedPassword = process.env.ADMIN_PASSWORD?.trim();

  const isAuthed = expectedPassword && adminToken === expectedPassword;

  if (!isAuthed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy px-4">
        <AdminGate />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex w-56 flex-col border-r border-border bg-sidebar px-3 py-6">
        <Link href="/admin" className="px-3 mb-6">
          <span className="text-gold font-bold text-lg font-heading">JKW</span>
          <span className="text-sidebar-foreground text-sm ml-1">Admin</span>
        </Link>
        <nav className="flex flex-col gap-1">
          {ADMIN_NAV.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 px-4 py-6 md:px-8">{children}</div>
    </div>
  );
}

function AdminGate() {
  return (
    <form
      action={async (formData: FormData) => {
        "use server";
        const password = formData.get("password") as string;
        const expected = process.env.ADMIN_PASSWORD?.trim();
        if (password === expected) {
          const { cookies } = await import("next/headers");
          const cookieStore = await cookies();
          cookieStore.set("jkw-admin", password, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });
        }
      }}
      className="w-full max-w-sm space-y-4"
    >
      <h1 className="text-xl font-bold text-white text-center font-heading">
        <span className="text-gold">JKW</span> Admin
      </h1>
      <input
        name="password"
        type="password"
        placeholder="Admin password"
        className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
        autoFocus
      />
      <button
        type="submit"
        className="w-full rounded-md bg-gold py-3 text-sm font-semibold text-navy hover:bg-gold-hover transition-colors"
      >
        Sign In
      </button>
    </form>
  );
}
