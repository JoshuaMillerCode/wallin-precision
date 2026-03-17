import { PageContainer } from "@/components/PageContainer";
import { ConcealedCarryPromoBlock } from "@/components/ConcealedCarryPromoBlock";

export const metadata = {
  title: "NC Concealed Carry Class | Wallin Precision | Unionville, NC",
  description:
    "NC Concealed Carry training. Safe firearm handling, carry laws, shooting fundamentals, responsible carry. Reserve your spot or contact us.",
};

export default function ConcealedCarryPage() {
  return (
    <PageContainer>
      <p className="mb-6 text-slate-600">
        NC Concealed Carry training in Unionville, NC. Questions about
        prerequisites or what to bring? Contact us.
      </p>
      <ConcealedCarryPromoBlock />
    </PageContainer>
  );
}
