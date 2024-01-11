import { MembershipCardProps } from "@/components/MembershipCard";

export const membershipData: MembershipCardProps[] = [
  {
    title: "Standard",
    description: "Unleash the Power of Your Business with Pro Plan.",
    price: 34,
    bulletpoints: [
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
    bulletpoints: [
      "Advanced Analytics Suite",
      "Exclusive Customization",
      "VIP E-commerce Integration",
      "24/7 Priority Support",
      "Enhanced Security Features",
    ],
    buttonStyle: "default",
    className: "from-theme-purple/50 to-theme-purple/10 bg-gradient-to-t",
  },
];
