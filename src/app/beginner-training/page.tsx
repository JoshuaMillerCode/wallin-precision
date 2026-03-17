import { PageContainer } from "@/components/PageContainer";
import { DualCTA } from "@/components/DualCTA";

export const metadata = {
  title: "Beginner Firearms Training | Wallin Precision | Unionville, NC",
  description:
    "Beginner-friendly firearms instruction. Safe handling, fundamentals, and clear guidance. Unionville, NC.",
};

export default function BeginnerTrainingPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Beginner Firearms Training
      </h1>
      <p className="mt-3 text-slate-600">
        Safe, structured instruction for first-time students. Learn safe firearm
        handling and fundamentals in a clear, supportive environment.
      </p>
      <DualCTA
        primaryLabel="View concealed carry class"
        primaryHref="/concealed-carry"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </PageContainer>
  );
}
