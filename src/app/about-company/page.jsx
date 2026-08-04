import AboutHero from "@/components/AboutCompany/AboutHero";
import ContactSection from "@/components/AboutCompany/ContactSection";
import CtaBanner from "@/components/AboutCompany/CtaBanner";
import PrinciplesSection from "@/components/AboutCompany/PrinciplesSection";
import TrustedBrands from "@/components/AboutCompany/TrustedBrands";
import FaqSection from "@/components/FaqSection";
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
