import ArticleHero from "@/components/ArticleDetails/ArticleHero";
import ArticleDetail from "@/components/ArticleDetails/ArticleDetails";
import MoreArticles from "@/components/ArticleDetails/MoreArticles";

export default function ArticleDetailsPage() {
  return (
    <div className="pt-20">
      <ArticleHero />
      <ArticleDetail />
      <MoreArticles />
    </div>
  );
}
