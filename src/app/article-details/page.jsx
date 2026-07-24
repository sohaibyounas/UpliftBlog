import ArticleHero from "@/components/ArticleHero";
import ArticleDetail from "@/components/ArticleDetails";
import MoreArticles from "@/components/MoreArticles";

export default function ArticleDetailsPage() {
  return (
    <div className="pt-20">
      <ArticleHero />
      <ArticleDetail />
      <MoreArticles />
    </div>
  );
}
