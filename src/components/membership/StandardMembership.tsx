import React from "react";
import Section from "../ui/section";
import MembershipsFeature from "./MembershipsFeature";
import { Cigarette } from "lucide-react";
import {
  membershipData,
  standardMembershipFeatures,
} from "@/data/MembershipData";
import LargeMembershipCard from "./LargeMembershipCard";

type Props = {};

const StandardMembership = (props: Props) => {
  return (
    <div className="flex lg:flex-row flex-col-reverse gap-12">
      <div className="grid gap-8 flex-1">
        {standardMembershipFeatures.map((feature, index) => (
          <MembershipsFeature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      <LargeMembershipCard
        plan={membershipData[0].title}
        description={membershipData[1].description}
        features={membershipData[0].bulletpoints}
        price={String(membershipData[0].price)}
      />
    </div>
  );
};

export default StandardMembership;
