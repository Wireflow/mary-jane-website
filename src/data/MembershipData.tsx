import { MembershipCardProps } from "@/components/membership/MembershipCard";
import {
  BadgeDollarSign,
  Crown,
  Gem,
  Percent,
  UserCheckIcon,
} from "lucide-react";

export const membershipData: MembershipCardProps[] = [
  {
    title: "Standard",
    description: "Access the Essentials for a Relaxing Experience.",
    price: 19.99,
    bulletpoints: [
      "Lounge Access",
      "10% Discount on All Products",
      "Monthly Specials and Promotions",
      "Standard Event Invitations",
      "Updates on New Products",
      "Complimentary Beverages",
      "Access to Members-Only Events",
      "Discounted Lounge Events",
      "Flexible Membership Terms",
      "Exclusive In-Store Offers",
    ],
  },
  {
    title: "Premium",
    description: "Indulge in Luxury with our Exclusive Premium Membership.",
    price: 29.99,
    bestoffer: true,
    bulletpoints: [
      "VIP Lounge Access",
      "15% Discount on All Products",
      "Exclusive VIP Events and Previews",
      "24/7 Priority Support",
      "Personalized Recommendations",
      "Complimentary Cigar on Sign-up",
      "Access to Exclusive Products",
      "Customizable Lounge Experience",
      "Premium Lounge Seating",
      "Member-Only Discounts",
    ],
    buttonStyle: "default",
    className: "from-theme-purple/50 to-theme-purple/10 bg-gradient-to-t",
  },
];

export const standardMembershipFeatures: {
  icon: React.ReactElement;
  title: string;
  description: string;
}[] = [
  {
    icon: <Crown />,
    title: "Exclusive Lounge Access",
    description:
      "Entry to our sophisticated smoking lounge with premium amenities for standard members.",
  },
  {
    icon: <Gem />,
    title: "Member-Only Events",
    description:
      "Unique gatherings and events exclusively for standard members in our smoke lounge.",
  },
  {
    icon: <Percent />,
    title: "Discounted Product Purchases",
    description:
      "Special pricing on select lounge products, enhancing the affordability for standard members.",
  },
];

export const premiumMembershipFeatures: {
  icon: React.ReactElement;
  title: string;
  description: string;
}[] = [
  {
    icon: <Crown />,
    title: "VIP Lounge Privileges",
    description:
      "Enhanced and exclusive VIP lounge access for premium members to unwind in style.",
  },
  {
    icon: <UserCheckIcon />,
    title: "Personalized Concierge Service",
    description:
      "Dedicated concierge service for personalized attention and seamless arrangements for our premium members.",
  },
  {
    icon: <BadgeDollarSign />,
    title: "Complimentary Premium Tastings",
    description:
      "Enjoy complimentary tastings of premium smoking products exclusively curated for our premium members.",
  },
];
