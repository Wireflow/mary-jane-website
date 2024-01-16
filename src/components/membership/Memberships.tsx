import { membershipData } from "@/data/MembershipData";
import MembershipCard from "./MembershipCard";
import Section from "../ui/section";
import Heading from "../ui/heading";
import Circle from "../ui/circle";
import MembershipCircles from "./MembershipCircles";

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
              bulletpoints={membership.bulletpoints}
              buttonStyle={membership.buttonStyle}
              className={membership.className}
            />
          );
        })}
      </div>
      <MembershipCircles />
    </Section>
  );
};

export default Memberships;
