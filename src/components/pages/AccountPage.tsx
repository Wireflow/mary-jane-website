import DealsSection from "@/components/User-Components/DealsSection";
import RewardsSection from "@/components/User-Components/RewardsSection";
import UserServices from "@/components/User-Components/User-Services/UserServices";
import UserGreeting from "@/components/User-Components/UserGreeting";
import { User } from "@prisma/client";
import React from "react";

type Props = {
  user?: User;
};

const AccountPage = ({ user }: Props) => {
  return (
    <div className="mt-[100px] flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <UserGreeting PageTitle="Your Account" />
        <UserServices points={user?.points} />
      </div>
      <RewardsSection />
      <DealsSection />
    </div>
  );
};

export default AccountPage;
