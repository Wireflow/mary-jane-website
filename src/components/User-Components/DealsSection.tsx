import React from "react";
import Section from "../ui/section";
import { DealsData } from "@/data/DealsData";
import Image from "next/image";

type Props = {};

const DealsSection = (props: Props) => {
  return (
    <Section>
      <div className="flex flex-col gap-10">
        <h2 className="text-black md:text-4xl text-3xl font-semibold">Deals</h2>
        <div className="flex gap-10 md:flex-row flex-col">
          {DealsData.map((deal, i) => {
            return (
              <div key={i} className="flex ">
                <div className="flex flex-col justify-between">
                  <p className="text-white bg-red-600 rounded-full text-center px-3 py-1 ">
                    {deal.sale}
                  </p>
                  <div className="flex flex-col justify-end ">
                    <p className="whitespace-nowrap text-2xl font-semibold">
                      {deal.name}
                    </p>
                    <p className="text-xl font-medium">{deal.price}</p>
                  </div>
                </div>
                <Image
                  className="md:w-[750px] w-full"
                  src={`/${deal.image}`}
                  alt="reward"
                  width={450}
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

export default DealsSection;
