import Link from "next/link";
import { SiteLogo } from "./SiteLogo";

const navLinkClass =
  "rounded text-brand-silver hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-silver focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark focus-visible:rounded";

export function SiteHeader() {
  return (
    <header className="border-b border-brand-silver/20 bg-brand-dark">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 px-6 py-4">
        <SiteLogo />
        <nav
          className="flex flex-wrap items-center gap-6 text-sm"
          aria-label="Main navigation"
        >
          <Link href="/book" className={`font-medium text-brand-olive ${navLinkClass}`}>
            Book
          </Link>
          <Link href="/concealed-carry" className={navLinkClass}>
            Concealed Carry
          </Link>
          <Link href="/about" className={navLinkClass}>
            About
          </Link>
          <Link href="/faq" className={navLinkClass}>
            FAQ
          </Link>
          <Link href="/contact" className={`font-medium text-brand-olive ${navLinkClass}`}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
