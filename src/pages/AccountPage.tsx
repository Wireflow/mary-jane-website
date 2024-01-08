import DealsSection from "@/components/User-Components/DealsSection";
import RewardsSection from "@/components/User-Components/RewardsSection";
import UserServices from "@/components/User-Components/User-Services/UserServices";
import UserGreeting from "@/components/User-Components/UserGreeting";
import React from "react";

type Props = {};

const AccountPage = (props: Props) => {
  return (
    <div className="mt-[100px]">
      <UserGreeting PageTitle="Your Account" />
      <UserServices />
      <RewardsSection />
      <DealsSection />
    </div>
  );
};

export default AccountPage;
