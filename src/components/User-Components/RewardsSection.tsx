import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Section from "../ui/section";
import { RewardsData } from "@/data/RewardsData";
import Image from "next/image";

type Props = {};

const RewardsSection = (props: Props) => {
  return (
    <Section className="">
      <div className=" w-full flex  gap-1  overflow-x-scroll scrollbar pb-5 ">
        <div>
          <div className="lg:w-[355px] w-[250px] h-20 bg-theme-purple clip-triangle border border-black rounded-xl p-6 text-white ">
            <h2 className="text-2xl text-center font-semi-bold">Rewards</h2>
          </div>
        </div>
        <div>
          <div className="w-[300px] h-20 border border-black rounded-xl   ">
            <h3 className="text-lg font-medium text-center">500 points</h3>
          </div>
        </div>
        <div>
          <div className="w-[300px] h-20 border border-black rounded-xl   ">
            <h3 className="text-lg font-medium text-center">500 points</h3>
          </div>
        </div>
        <div>
          <div className="w-[300px] h-20 border border-black rounded-xl   ">
            <h3 className="text-lg font-medium text-center">500 points</h3>
          </div>
        </div>
        <div>
          <div className="w-[300px] h-20 border border-black rounded-xl   ">
            <h3 className="text-lg font-medium text-center">500 points</h3>
          </div>
        </div>
        <div>
          <div className="w-[300px] h-20 border border-black rounded-xl   ">
            <h3 className="text-lg font-medium text-center">500 points</h3>
          </div>
        </div>
        <div>
          <div className="w-[300px] h-20 border border-black rounded-xl   ">
            <h3 className="text-lg font-medium text-center">500 points</h3>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RewardsSection;
