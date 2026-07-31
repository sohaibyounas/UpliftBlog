import ComparisonTable from "@/components/ComparisonTable";
import FaqSection from "@/components/FaqSection";
import PricingHero from "@/components/PricingHero";
import { pricingFaqs } from "@/hooks/pricingfaqs";

export default function PricingPage() {
  return (
    <div className="pt-20">
      <PricingHero />
      <ComparisonTable />
      <FaqSection faqs={pricingFaqs} />
    </div>
  );
}
