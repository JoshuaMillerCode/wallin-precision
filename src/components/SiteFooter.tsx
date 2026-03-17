import Link from "next/link";

const linkClass =
  "rounded text-brand-silver hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-silver focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-silver/20 bg-brand-dark text-brand-silver">
      <div className="mx-auto max-w-content px-6 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-semibold text-white">Wallin Precision</p>
            <p className="mt-1 text-sm text-brand-olive">Safe. Confident. Capable.</p>
            <p className="mt-2 text-sm text-brand-silver/80">Unionville, NC</p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-silver/70">
                Contact
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <a href="tel:+17042416014" className={linkClass}>
                    (704) 241-6014
                  </a>
                </li>
                <li>
                  <a href="mailto:WallinPrecision@gmail.com" className={linkClass}>
                    WallinPrecision@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-silver/70">
                Training
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <Link href="/concealed-carry" className={linkClass}>
                    Concealed Carry
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-silver/70">
                Info
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <Link href="/about" className={linkClass}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className={linkClass}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={linkClass}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-brand-silver/20 pt-6 text-center text-xs text-brand-silver/70">
          Firearms safety and concealed carry training. Not legal advice.
        </p>
      </div>
    </footer>
  );
}
