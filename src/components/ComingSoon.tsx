import React from "react";
import Section from "./ui/section";
import { ArrowDown, ArrowUp, MoveDown } from "lucide-react";
import Link from "next/link";

type Props = {};

const ComingSoon = (props: Props) => {
  return (
    <Section background="purple" size="sm">
      <div className="flex lg:flex-row flex-col gap-8 items-center justify-between">
        <div>
          <p className="text-theme-yellow font-bold text-start">Upcoming</p>
          <p className="text-4xl font-bold text-theme-white text-start">
            MARY JANE SOCIAL CLUB
          </p>
          <p className="text-gray-200 lg:max-w-[600px] mt-2">
            Explore exclusive perks and a rewarding experience with the upcoming
            Mary Jane Social Club membership. Stay tuned to discover membership
            details and our exciting rewards program!
          </p>
        </div>
        <div className="flex gap-6 items-center md:flex-row flex-col w-full lg:w-auto">
          <Link href={"#features-section"} scroll className="w-full">
            <div className="bg-white h-[115px] py-3 px-5 flex w-full items-end rounded-lg lg:w-[250px] cursor-pointer hover:bg-opacity-70 transition-colors duration-300">
              <div className="flex items-end gap-2 ">
                <p className="text-theme-purple font-bold">
                  Rewards <br /> Program
                </p>
                <ArrowUp
                  className="text-theme-purple w-12 h-12 rotate-45"
                  strokeWidth={1.2}
                />
              </div>
            </div>
          </Link>

          <Link href={"#memberships-section"} scroll className="w-full">
            <div className="group border-2 border-theme-white h-[115px] py-3 px-5 w-full flex items-end rounded-lg lg:w-[250px] cursor-pointer hover:bg-theme-white transition-colors duration-300">
              <div className="flex items-end gap-2 ">
                <p className="text-theme-white font-bold group-hover:text-theme-purple">
                  View <br /> Memberships
                </p>
                <ArrowUp
                  className="text-theme-white w-12 h-12 rotate-45 group-hover:text-theme-purple "
                  strokeWidth={1.2}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default ComingSoon;
