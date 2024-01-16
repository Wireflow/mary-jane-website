import React from "react";
import Section from "../ui/section";
import {
  membershipData,
  premiumMembershipFeatures,
} from "@/data/MembershipData";
import MembershipsFeature from "./MembershipsFeature";
import LargeMembershipCard from "./LargeMembershipCard";

type Props = {};

const PremiumMembership = (props: Props) => {
  return (
    <div className="flex lg:flex-row flex-col  gap-12">
      <LargeMembershipCard
        plan={membershipData[1].title}
        description={membershipData[1].description}
        features={membershipData[1].bulletpoints}
        price={String(membershipData[1].price)}
      />
      <div className="grid gap-8 flex-1">
        {premiumMembershipFeatures.map((feature, index) => (
          <MembershipsFeature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PremiumMembership;
