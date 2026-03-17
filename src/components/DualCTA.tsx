import Link from "next/link";

type DualCTAProps = {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  variant?: "light" | "dark";
};

export function DualCTA({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "light",
}: DualCTAProps) {
  const isDark = variant === "dark";
  return (
    <div className="mt-6 flex flex-wrap gap-4">
      <Link
        href={primaryHref}
        className={
          isDark
            ? "inline-flex items-center justify-center rounded-md bg-brand-olive px-4 py-2.5 text-sm font-medium text-brand-dark hover:bg-brand-olive-light focus:outline-none focus:ring-2 focus:ring-brand-olive focus:ring-offset-2 focus:ring-offset-brand-dark"
            : "inline-flex items-center justify-center rounded-md bg-brand-olive px-4 py-2.5 text-sm font-medium text-brand-dark hover:bg-brand-olive-light focus:outline-none focus:ring-2 focus:ring-brand-olive focus:ring-offset-2"
        }
      >
        {primaryLabel}
      </Link>
      <Link
        href={secondaryHref}
        className={
          isDark
            ? "inline-flex items-center justify-center rounded-md border border-brand-silver/50 px-4 py-2.5 text-sm font-medium text-brand-silver hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-silver focus:ring-offset-2 focus:ring-offset-brand-dark"
            : "inline-flex items-center justify-center rounded-md border-2 border-brand-olive bg-white px-4 py-2.5 text-sm font-medium text-brand-dark hover:bg-brand-olive/10 focus:outline-none focus:ring-2 focus:ring-brand-olive focus:ring-offset-2"
        }
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
