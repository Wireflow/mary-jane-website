import { Coins, Crown, Gift } from "lucide-react";
import FeatureCard from "./FeatureCard";
import Section from "./ui/section";
import Heading from "./ui/heading";
import { featuresData } from "@/data/FeaturesData";
import { cn } from "@/lib/utils";

type Props = {};

const Features = (props: Props) => {
  return (
    <Section background="black" id="features-section">
      <Heading
        width={600}
        badgeColor="yellow"
        descriptionColor="light-gray"
        variant="white"
        badge="Exclusive"
        title="Shop & Earn Rewards"
        description="Shop in-store, earn points, unlock rewards. Every purchase brings you closer to exclusive benefits. Start earning today!"
      />

      <div
        className={cn(
          "grid md:grid-cols-2 lg:grid-cols-3 flex-wrap mt-12 gap-8"
        )}
      >
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            callToAction={feature.callToAction}
          />
        ))}
      </div>
    </Section>
  );
};

export default Features;
