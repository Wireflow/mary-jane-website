import PremiumMembership from "../membership/PremiumMembership";
import StandardMembership from "../membership/StandardMembership";
import Heading from "../ui/heading";
import PageBanner from "../ui/page-banner";
import Section from "../ui/section";

type Props = {};

const MembershipsPage = (props: Props) => {
  return (
    <>
      <PageBanner
        title="Our Memberships"
        description="Premium service awaits at Mary Jane Club's smoking lounge."
      />
      <Section size="sm">
        <Heading
          badge="Memberships"
          title="Mary Jane Social Club"
          position="left"
          width={800}
          description="Ignite your senses at Mary Jane Social Club, where exclusive
            memberships blend exceptional service and premium benefits for an
            unmatched smoke lounge experience."
        />
      </Section>
      <Section size="md" className="-mt-10">
        <div className="flex flex-col gap-12 md:gap-24">
          <PremiumMembership />
          <StandardMembership />
        </div>
      </Section>
    </>
  );
};

export default MembershipsPage;
