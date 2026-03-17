import Image from "next/image";
import { PageContainer } from "@/components/PageContainer";
import { DualCTA } from "@/components/DualCTA";

export const metadata = {
  title: "About | Wallin Precision | Unionville, NC",
  description:
    "About Wallin Precision firearms training. Instructor and facility. Unionville, NC.",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
        <div className="w-full shrink-0 sm:w-80">
          <Image
            src="/images/about.jpg"
            alt="Wallin Precision instructor in outdoor training setting"
            width={400}
            height={500}
            className="rounded-xl border border-slate-200 object-cover shadow-md"
            sizes="(max-width: 640px) 100vw, 320px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            About
          </h1>
          <p className="mt-3 text-slate-600">
            Wallin Precision provides firearms safety and concealed carry training
            in Unionville, NC. We focus on clear, structured instruction so
            students leave safe, confident, and capable—whether they’re new to
            firearms or looking to sharpen their skills.
          </p>
          <p className="mt-3 text-slate-600">
            Our classes cover safe handling, applicable laws, shooting fundamentals,
            and responsible carry practices. We welcome both first-time students and
            experienced shooters. For instructor credentials, facility details, or
            to schedule private training, contact us.
          </p>
          <DualCTA
            primaryLabel="View courses"
            primaryHref="/concealed-carry"
            secondaryLabel="Contact us"
            secondaryHref="/contact"
          />
        </div>
      </div>
    </PageContainer>
  );
}
