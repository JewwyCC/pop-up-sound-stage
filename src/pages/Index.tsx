import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturesSection />
    </div>
  );
};

export default Index;
