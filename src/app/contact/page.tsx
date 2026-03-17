import { PageContainer } from "@/components/PageContainer";
import Link from "next/link";

export const metadata = {
  title: "Contact | Wallin Precision | Unionville, NC",
  description:
    "Contact Wallin Precision. Phone, email. Unionville, NC. Questions about classes or booking.",
};

export default function ContactPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Contact
      </h1>
      <p className="mt-3 text-slate-600">
        Reach us by phone or email. We’re happy to answer questions about
        classes, prerequisites, or booking.
      </p>
      <ul className="mt-6 space-y-2 text-slate-900">
        <li>
          <span className="text-sm font-medium text-slate-500">Phone</span>
          <br />
          <a
            href="tel:+17042416014"
            className="font-medium text-brand-olive hover:underline focus:outline-none focus:ring-2 focus:ring-brand-olive focus:ring-offset-2"
          >
            (704) 241-6014
          </a>
        </li>
        <li>
          <span className="text-sm font-medium text-slate-500">Email</span>
          <br />
          <a
            href="mailto:WallinPrecision@gmail.com"
            className="font-medium text-brand-olive hover:underline focus:outline-none focus:ring-2 focus:ring-brand-olive focus:ring-offset-2"
          >
            WallinPrecision@gmail.com
          </a>
        </li>
      </ul>
      <p className="mt-8 text-slate-600">
        <Link href="/concealed-carry" className="font-medium text-brand-olive hover:underline hover:text-brand-dark">
          View concealed carry class →
        </Link>
      </p>
    </PageContainer>
  );
}
