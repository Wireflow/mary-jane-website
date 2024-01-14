import { ArrowRight, ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import Section from "../ui/section";
import { RewardsData } from "@/data/RewardsData";
import Image from "next/image";

type Props = {};

const RewardsSection = (props: Props) => {
  return (
    <Section className="">
      <div className="flex flex-col gap-1 ml-2 mb-5">
        {" "}
        <p className="md:text-xl  font-semibold mb-2 md:w-[600px]">
          Puff, pass, and collect{" "}
          <span className="text-theme-purple bg-theme-yellow  rounded-2xl font-bold px-3">
            rewards
          </span>{" "}
        </p>
        <div className="flex justify-between items-center ">
          <h2 className="md:text-3xl text-2xl font-semibold ">Rewards</h2>
          <Link href={"/rewards"}>
            <p className="flex md:text-lg gap-1 font-medium text-sm items-center">
              View all{" "}
              <ArrowUp
                className=" md:w-10 md:h-10 rotate-90"
                strokeWidth={1.2}
              />
            </p>
          </Link>
        </div>
      </div>
      <div className="   ">
        <div className="sm:grid xl:grid-cols-4 sm:grid-cols-2 flex gap-2 overflow-auto scrollbar  pb-5">
          {RewardsData.map((reward, i) => {
            return (
              <div key={i} className=" bg-stone-800 p-5 rounded-2xl  ">
                <Image
                  className="rounded-xl max-w-full 2xl:min-w-60 min-w-[200px]"
                  src={reward.image}
                  alt="reward-image"
                  width={500}
                  height={700}
                />
                <div className="flex justify-between mt-3 items-center">
                  <div className="flex flex-col  ml-1">
                    <h2 className="text-xl font-medium text-white">
                      {reward.name}
                    </h2>
                  </div>{" "}
                  <p className="text-sm text-gray-200">
                    {reward.points}{" "}
                    <span className="text-theme-yellow">Points</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default RewardsSection;
