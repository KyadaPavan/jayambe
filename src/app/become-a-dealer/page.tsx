import { DealerHero } from "@/components/dealer/DealerHero";
import { DealerBenefits } from "@/components/dealer/DealerBenefits";
import { DealerProcess } from "@/components/dealer/DealerProcess";
import { DealerForm } from "@/components/dealer/DealerForm";

export const metadata = {
  title: "Plywood Dealership & Distributorship in Bihar | Jai Shree Radha Plywood",
  description: "Become a plywood dealer or distributor with Jai Shree Radha Plywood. Consistent quality, dependable supply and long-term support. Enquire today."
};

export default function BecomeDealerPage() {
  return (
    <main className="bg-[var(--color-cream)] min-h-screen selection:bg-[var(--color-amber)] selection:text-white">
      <DealerHero />
      <DealerBenefits />
      <DealerProcess />
      <DealerForm />
    </main>
  );
}
