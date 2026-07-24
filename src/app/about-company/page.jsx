import AboutHero from "@/components/AboutHero";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import FaqSection from "@/components/FaqSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import TrustedBrands from "@/components/TrustedBrands";
import { aboutFaqs } from "@/hooks/aboutfaqs";

export default function AboutCompany() {
  return (
    <div className="pt-20">
      <AboutHero />
      <PrinciplesSection />
      <TrustedBrands />
      <CtaBanner />
      <ContactSection />
      <FaqSection faqs={aboutFaqs} />
    </div>
  );
}
