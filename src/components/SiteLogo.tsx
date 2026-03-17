import Link from "next/link";
import Image from "next/image";

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-silver focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
      aria-label="Wallin Precision home"
    >
      <span className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-full bg-brand-dark">
        <Image
          src="/images/logo.png"
          alt=""
          width={36}
          height={36}
          className="h-full w-full object-cover"
          priority
        />
      </span>
      <span className="text-lg font-semibold text-brand-silver">
        Wallin Precision
      </span>
    </Link>
  );
}
