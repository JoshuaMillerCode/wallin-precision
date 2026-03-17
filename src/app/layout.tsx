import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Wallin Precision | Firearms Training | Unionville, NC",
  description:
    "Beginner-friendly and advanced firearms training. Concealed carry training. Safe. Confident. Capable. Unionville, NC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-brand-flag-muted font-sans text-slate-900 antialiased">
        <a
          href="#main-content"
          className="skip-link sr-only focus:outline-none"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="min-h-[60vh]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
