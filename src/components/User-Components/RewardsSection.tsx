import { ArrowRight, ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import Section from "../ui/section";
import { RewardsData } from "@/data/RewardsData";
import Image from "next/image";

type Props = {};

const RewardsSection = (props: Props) => {
  return (
    <Section className="bg-black text-white">
      <div>
        <div className="flex justify-between mb-2">
          <h2 className="text-4xl font-semibold pb-5">Rewards</h2>
          <p className="flex gap-1 items-center">
            View all{" "}
            <ArrowUp
              className="text-white w-12 h-12 rotate-45"
              strokeWidth={1.2}
            />
          </p>
        </div>
      </div>
      <div className="      pb-5 ">
        <div className="flex gap-2 overflow-x-scroll scrollbar">
          <div className="">
            <Image
              className="rounded-xl"
              src={"/RawPapers.png"}
              alt="papers"
              width={300}
              height={400}
            />
            <div className="flex flex-col gap-1 mt-2 ml-1">
              <h2 className="text-xl font-medium">Raw Papers</h2>
              <p className="text-md ">2000 Points</p>
            </div>
          </div>
        
          
        </div>
      </div>
    </Section>
  );
};

export default RewardsSection;
