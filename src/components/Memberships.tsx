import { membershipData } from "@/data/MembershipData";
import MembershipCard from "./MembershipCard";
import Section from "./ui/section";
import Heading from "./ui/title";

type Props = {};

const Memberships = (props: Props) => {
  return (
    <Section
      size="md"
      className="relative overflow-hidden"
      id="memberships-section"
    >
      <Heading
        badge="Memberships"
        title="Mary Jane Social Club"
        description="Ignite your senses at Mary Jane Social Club, where exclusive
          memberships blend exceptional service and premium benefits for an
          unmatched smoke lounge experience."
      />
      <div className="flex md:flex-row flex-col gap-12 mt-12 items-center justify-center">
        {membershipData.map((membership, index) => {
          return (
            <MembershipCard
              key={index}
              title={membership.title}
              description={membership.description}
              price={membership.price}
              bestoffer={membership.bestoffer}
              bulletPoints={membership.bulletPoints}
              buttonStyle={membership.buttonStyle}
              className={membership.className}
            />
          );
        })}
      </div>
      <div className="hidden md:block absolute h-[350px] w-[350px] bg-theme-purple/10 -top-[5%] -left-[5%] rounded-full border-2 border-theme-purple/10" />
      <div className="absolute h-[450px] w-[450px] bg-theme-yellow/2 0 bottom-[.5%] md:-bottom-[25%] -left-40 md:left-[20%] rounded-full border-2 border-black/10" />
      <div className="absolute h-[300px] md:h-[500px] w-[300px] md:w-[500px] bg-theme-purple/5 -right-40 md:right-[5%] lg:right-[10%] top-[15%] lg:top-[10%] rounded-full border-2 border-theme-purple/10" />
      <div className="absolute h-[200px] w-[200px] bg-theme-yellow/10 left-[45%] top-1/2 rounded-full border-2 border-black/10" />
      <div className="absolute h-[200px] w-[200px] bg-theme-purple/25 right-[5%] bottom-[5%] rounded-full border-2 border-black/10" />
    </Section>
  );
};

export default Memberships;
