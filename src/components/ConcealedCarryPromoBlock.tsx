/**
 * Mirrors the Wallin Precision Facebook concealed-carry promo: same four
 * bullets and “Space is limited / Reserve your spot” feel.
 */
import { DualCTA } from "./DualCTA";

const BULLETS = [
  "Safe Firearm Handling",
  "Concealed Carry Laws",
  "Shooting Fundamentals",
  "Responsible Carry Practices",
] as const;

export function ConcealedCarryPromoBlock() {
  return (
    <div className="rounded-xl border-2 border-brand-olive/40 bg-brand-dark px-6 py-8 text-white sm:px-8 sm:py-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-silver/80">
        Wallin Precision Training
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-silver sm:text-3xl">
        Concealed Carry Class
      </h2>
      <ul className="mt-6 space-y-2 sm:mt-8">
        {BULLETS.map((item) => (
          <li key={item} className="flex items-center gap-3 text-brand-silver/90">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-olive" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 font-semibold uppercase tracking-wide text-brand-olive sm:mt-8">
        Space is limited — reserve your spot
      </p>
      <DualCTA
        primaryLabel="Reserve your spot"
        primaryHref="/book"
        secondaryLabel="Message us to sign up"
        secondaryHref="/contact"
        variant="dark"
      />
    </div>
  );
}
