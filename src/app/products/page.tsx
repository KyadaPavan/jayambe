import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductsOverview } from "@/components/products/ProductsOverview";
import { BuyingGuide } from "@/components/products/BuyingGuide";
import { QualityCheck } from "@/components/products/QualityCheck";
import { ProductsCTA } from "@/components/products/ProductsCTA";

export const metadata = {
  title: "Plywood Products | Furniture, Interior & Bulk Plywood in Bihar",
  description: "Explore plywood for furniture, interiors, residential, commercial and construction use. Bulk supply for dealers and contractors in Araria, Forbesganj and across Bihar."
};

export default function ProductsPage() {
  return (
    <main className="bg-[var(--color-cream)] min-h-screen selection:bg-[var(--color-amber)] selection:text-white">
      <ProductsHero />
      <ProductsOverview />
      <BuyingGuide />
      <QualityCheck />
      <ProductsCTA />
    </main>
  );
}
