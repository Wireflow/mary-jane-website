"use client";
import React from "react";
import Section from "../ui/section";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type GreetingProps = {
  PageTitle: string;
};

const UserGreeting = ({ PageTitle }: GreetingProps) => {
  const redirect = useRouter();
  const { data: session, status } = useSession();
  const userName = session?.user?.name;
  const capitalizedUserName = userName
    ? userName.charAt(0).toUpperCase() + userName.slice(1)
    : null;

  return (
    <Section size="xs" className="">
      <div>
        <p className="text-theme-purple text-sm font-bold">{PageTitle}</p>
        <h2 className="md:text-4xl sm:text-3xl text-2xl font-semibold">
          Welcome back, {capitalizedUserName}{" "}
        </h2>
      </div>
    </Section>
  );
};

export default UserGreeting;
