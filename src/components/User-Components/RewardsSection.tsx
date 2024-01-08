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
          <h2 className="text-white md:text-4xl text-3xl font-semibold">
            Rewards
          </h2>
          <Link
            className="flex items-center gap-2 md:text-lg text-md text-white"
            href={"/"}
          >
            View all <ArrowRight size={25} />
          </Link>
        </div>
        <div className="sm:grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-4 sm:overflow-hidden overflow-x-scroll flex gap-20 ">
          {RewardsData.map((reward, i) => {
            return (
              <div
                key={i}
                className="  flex flex-col justify-evenly  items-center"
              >
                <div className="bg-white rounded-lg overflow-hidden w-[250px] h-[200px] flex justify-center  gap-10">
                  <Image
                    className="md:w-[550px]  "
                    src={`/${reward.image}`}
                    alt="reward"
                    width={450}
                    height={100}
                  />
                </div>

                <div className="p-4 text-center">
                  <p className="text-white text-lg">
                    {reward.points}{" "}
                    <span className="font-semibold">points</span>
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
