import FeaturesHero from "@/components/Features/FeaturesHero";
import CalloutSection from "@/components/Features/CalloutSection";
import WorkoutBuilder from "@/components/Features/WorkoutBuilder";
import ExerciseLibrary from "@/components/Features/ExerciseLibrary";
import BottomBanner from "@/components/Features/BottomBanner";
import FaqSection from "@/components/FaqSection";
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
