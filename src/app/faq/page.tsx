import { PageContainer } from "@/components/PageContainer";
import Link from "next/link";

export const metadata = {
  title: "FAQ | Wallin Precision | Unionville, NC",
  description:
    "Frequently asked questions about firearms training and concealed carry. Wallin Precision, Unionville, NC.",
};

export default function FAQPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        FAQ
      </h1>
      <p className="mt-3 text-slate-600">
        Common questions about our classes and how to reserve your spot.
      </p>

      <dl className="mt-8 space-y-6">
        <div>
          <dt className="font-medium text-slate-900">
            How do I reserve a spot for a class?
          </dt>
          <dd className="mt-1 text-slate-600">
            Contact us by phone or email to reserve your spot. Once we add
            online booking, you’ll also be able to reserve and pay through this
            site.
          </dd>
        </div>
        <div>
          <dt className="font-medium text-slate-900">
            What should I bring to class?
          </dt>
          <dd className="mt-1 text-slate-600">
            We’ll confirm requirements when you sign up. In general, bring
            eye and ear protection. For live-fire portions, we’ll tell you
            what’s needed. If you don’t have gear yet, ask us when you contact
            us.
          </dd>
        </div>
        <div>
          <dt className="font-medium text-slate-900">
            Is the concealed carry class for beginners?
          </dt>
          <dd className="mt-1 text-slate-600">
            Our concealed carry class is designed to be accessible. We cover
            safe firearm handling and shooting fundamentals. If you’re unsure
            whether it’s the right fit, contact us and we can help you decide.
          </dd>
        </div>
      </dl>

      <p className="mt-8">
        <Link
          href="/contact"
          className="font-medium text-slate-900 hover:underline"
        >
          Contact us with questions →
        </Link>
      </p>
    </PageContainer>
  );
}
