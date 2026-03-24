import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "JKW Academy — STEAM Learning in San Diego",
    template: "%s | JKW Academy",
  },
  description:
    "San Diego's premier STEAM-focused homeschool enrichment center. Hands-on Science, Technology, Engineering, Art, and Math classes for TK through 9th grade.",
  keywords: [
    "STEAM education",
    "homeschool enrichment",
    "San Diego",
    "El Cajon",
    "homeschool classes",
    "STEM",
    "coding for kids",
    "robotics",
    "3D printing",
    "science classes",
    "charter school vendor",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "JKW Academy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
