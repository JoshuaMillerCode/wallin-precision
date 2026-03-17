import Link from "next/link";
import Image from "next/image";
import { PageContainer } from "@/components/PageContainer";
import { DualCTA } from "@/components/DualCTA";
import { ConcealedCarryPromoBlock } from "@/components/ConcealedCarryPromoBlock";

export default function HomePage() {
  return (
    <>
      {/* Hero — full viewport, image fits width and is anchored at top so logo isn't cut off */}
      <section className="relative min-h-screen w-full border-b border-brand-silver/20 overflow-hidden">
        <Image
          src="/images/hero-no-text.png"
          alt=""
          fill
          className="object-cover object-top w-full"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-dark/60" aria-hidden />
        <PageContainer className="relative flex min-h-screen flex-col justify-center py-16 sm:py-20">
          <div className="max-w-xl rounded-xl border border-brand-silver/20 bg-brand-dark/95 px-6 py-8 shadow-xl backdrop-blur-sm sm:px-8 sm:py-10">
            <span className="relative block h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-brand-silver/40 bg-brand-dark sm:h-24 sm:w-24">
              <Image
                src="/images/logo.png"
                alt=""
                width={96}
                height={96}
                className="h-full w-full object-cover"
                priority
              />
            </span>
            <h1 className="mt-6 text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl md:text-5xl">
              Wallin Precision
            </h1>
            <p className="mt-2 text-lg font-medium uppercase tracking-widest text-brand-olive sm:text-xl">
              Firearms Training
            </p>
            <p className="mt-4 text-lg text-white/95">
              Safety • Precision • Confidence
            </p>
            <p className="mt-1 text-sm text-white/80">Unionville, NC</p>
            <DualCTA
              primaryLabel="View Concealed Carry Class"
              primaryHref="/concealed-carry"
              secondaryLabel="Contact us"
              secondaryHref="/contact"
              variant="dark"
            />
          </div>
        </PageContainer>
      </section>

      {/* Trust band */}
      <section className="border-b border-slate-200 bg-white">
        <PageContainer>
          <h2 className="sr-only">Why train with us</h2>
          <ul className="grid gap-8 sm:grid-cols-3 sm:gap-10">
            <li>
              <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                Location
              </p>
              <p className="mt-1 font-medium text-slate-900">Unionville, NC</p>
              <p className="mt-0.5 text-sm text-slate-600">
                Local training you can trust
              </p>
            </li>
            <li>
              <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                Contact
              </p>
              <p className="mt-1">
                <a
                  href="tel:+17042416014"
                  className="rounded font-medium text-brand-olive hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-olive focus-visible:ring-offset-2"
                >
                  (704) 241-6014
                </a>
              </p>
              <p>
                <a
                  href="mailto:WallinPrecision@gmail.com"
                  className="rounded font-medium text-brand-olive hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-olive focus-visible:ring-offset-2"
                >
                  WallinPrecision@gmail.com
                </a>
              </p>
            </li>
            <li>
              <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                Focus
              </p>
              <p className="mt-1 font-medium text-slate-900">Safety first</p>
              <p className="mt-0.5 text-sm text-slate-600">
                Structured, professional instruction
              </p>
            </li>
          </ul>
        </PageContainer>
      </section>

      {/* Primary offer — matches Facebook promo feel */}
      <section className="border-b border-slate-200 bg-slate-50">
        <PageContainer>
          <ConcealedCarryPromoBlock />
        </PageContainer>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-dark text-brand-silver">
        <PageContainer>
          <p className="text-lg font-semibold text-white">
            Questions? Contact us by phone or email.
          </p>
          <p className="mt-1 text-brand-silver/90">
            Reserve your spot online or reach out if you need help choosing the
            right class.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-brand-olive px-4 py-2.5 text-sm font-medium text-brand-dark hover:bg-brand-olive-light focus:outline-none focus:ring-2 focus:ring-brand-olive focus:ring-offset-2 focus:ring-offset-brand-dark"
            >
              Contact us
            </Link>
            <Link
              href="/concealed-carry"
              className="inline-flex items-center justify-center rounded-md border border-brand-silver/40 px-4 py-2.5 text-sm font-medium text-brand-silver hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-silver focus:ring-offset-2 focus:ring-offset-brand-dark"
            >
              View concealed carry class
            </Link>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
