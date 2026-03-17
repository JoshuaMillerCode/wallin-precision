import { PageContainer } from "@/components/PageContainer";
import { DualCTA } from "@/components/DualCTA";

export const metadata = {
  title: "Advanced & Private Training | Wallin Precision | Unionville, NC",
  description:
    "Advanced firearms and private training. Experienced shooter instruction. Unionville, NC.",
};

export default function AdvancedTrainingPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Advanced &amp; Private Training
      </h1>
      <p className="mt-3 text-slate-600">
        Training for experienced shooters and private instruction. Message or
        email us to discuss your goals and schedule.
      </p>
      <DualCTA
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="View concealed carry class"
        secondaryHref="/concealed-carry"
      />
    </PageContainer>
  );
}
