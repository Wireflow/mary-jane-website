"use client";

import React from "react";
import Section from "../ui/section";
import Image from "next/image";
import { useSession } from "next-auth/react";

type Props = {};

const RewardHero = (props: Props) => {
  const { data: session, status } = useSession();
  return (
    <Section
      className="relative md:mt-0 mt-[67px]"
      size="sm"
      background="purple"
    >
      <div className="flex flex-col-reverse gap-5 ">
        <div className="flex justify-center items-center flex-col">
          <h2 className=" text-theme-yellow md:text-6xl text-4xl md:mt-5 mt-0 font-bold">
            Rewards
          </h2>
          <p className=" text-theme-yellow mt-1 md:text-lg text-sm text-center">
            Shop with us and never miss out on rewarding moments with every
            purchase
          </p>
        </div>
        {/* <div className="bg-theme-yellow md:w-80 h-[80px] md:absolute right-0 top-0 rounded-bl-2xl  ">
          <div className="">

          </div>
          </div> */}
      </div>
    </Section>
  );
};

export default RewardHero;
