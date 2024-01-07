import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Section from "../ui/section";
import { RewardsData } from "@/data/RewardsData";
import Image from "next/image";

type Props = {};

const RewardsSection = (props: Props) => {
  return (
    <Section background="pitch-black">
      <div className="flex flex-col gap-10 justify-center">
        <div className="flex justify-between">
          <h2 className="text-white md:text-4xl text-3xl">Rewards</h2>
          <Link
            className="flex items-center gap-2 md:text-lg text-md text-white"
            href={"/"}
          >
            View all <ArrowRight size={25} />
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10 ">
          {RewardsData.map((reward, i) => {
            return (
              <div key={i} className="flex items-start h-full">
                <p className="text-white text-xl ">
                  {reward.points} <span className="font-semibold">points</span>
                </p>
                <Image
                className="md:w-[250px] flex justify-end w-full"
                  src={`/${reward.image}`}
                  alt="reward"
                  width={250}
                  height={100}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default RewardsSection;
