import BottomBanner from "@/components/BottomBanner";
import CalloutSection from "@/components/CalloutSection";
import ExerciseLibrary from "@/components/ExerciseLibrary";
import FaqSection from "@/components/FaqSection";
import FeaturesHero from "@/components/FeaturesHero";
import WorkoutBuilder from "@/components/WorkoutBuilder";
import { featuresFaq } from "@/hooks/featuresfaq";

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      <FeaturesHero />
      <CalloutSection />
      <WorkoutBuilder />
      <ExerciseLibrary />
      <BottomBanner />
      <FaqSection faq={featuresFaq} />
    </div>
  );
}
