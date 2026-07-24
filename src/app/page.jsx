import HeroSection from "@/components/HeroSection";
import NewsletterSection from "@/components/NewsletterSection";
import LatestArticles from "@/components/LatestArticles";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <NewsletterSection />
      <LatestArticles />
    </div>
  );
}
