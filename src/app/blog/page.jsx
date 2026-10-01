import HeroSection from "@/components/HeroSection";
import NewsletterSection from "@/components/NewsletterSection";
import LatestArticles from "@/components/LatestArticles";

export const metadata = {
  title: "Blog & Resource Center | UPLIFTT",
  description:
    "Explore coaching guides, periodization science, and fitness business strategies.",
};

export default function BlogPage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <NewsletterSection />
      <LatestArticles />
    </div>
  );
}
