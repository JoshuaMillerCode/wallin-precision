import { PageContainer } from "@/components/PageContainer";
import Link from "next/link";

export const metadata = {
  title: "Book a class | Wallin Precision | Unionville, NC",
  description:
    "Reserve your spot for Wallin Precision training. Unionville, NC.",
};

export default function BookPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Book a class
      </h1>
      <p className="mt-3 text-slate-600">
        Reserve your spot by contacting us. We’ll confirm availability and
        answer any questions about the class.
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
      >
        Contact us to reserve your spot
      </Link>
    </PageContainer>
  );
}
