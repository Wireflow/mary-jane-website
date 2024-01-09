import React from "react";
import Section from "./ui/section";
import MembershipCard, { MembershipCardProps } from "./MembershipCard";

type Props = {};

const Memberships = (props: Props) => {
  const membershipData: MembershipCardProps[] = [
    {
      title: "Standard",
      description: "Unleash the Power of Your Business with Pro Plan.",
      price: 34,
      bulletPoints: [
        "Enhanced Analytics",
        "Custom Domain",
        "E-commerce Integration",
        "Priority Support",
        "Advanced Security",
      ],
    },
    {
      title: "Premium",
      description: "Take Your Business to New Heights with our Premium Plan.",
      price: 49,
      bestoffer: true,
      bulletPoints: [
        "Advanced Analytics Suite",
        "Exclusive Customization",
        "VIP E-commerce Integration",
        "24/7 Priority Support",
        "Enhanced Security Features",
      ],
      buttonStyle: "default",
      className: "from-theme-purple/60 to-theme-purple/20 bg-gradient-to-t",
    },
  ];

  return (
    <Section>
      <div className="max-w-[580px] mx-auto text-center">
        <p className="text-theme-purple font-bold">Memberships</p>
        <h2 className="text-5xl font-bold">Mary Jane Social Club</h2>
        <p className="mt-3 text-gray-500">
          Ignite your senses at Mary Jane Social Club, where exclusive
          memberships blend exceptional service and premium benefits for an
          unmatched smoke lounge experience.
        </p>
      </div>
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
    </Section>
  );
};

export default Memberships;
