import React from "react";
import Section from "../ui/section";
import { DealsData } from "@/data/DealsData";
import Image from "next/image";

type Props = {};

const DealsSection = (props: Props) => {
  return (
    <Section>
      <div className="flex flex-col gap-10">
        <h2 className="text-black md:text-5xl text-4xl font-semibold">Deals</h2>
        <div className="grid gap-5 md:grid-cols-3 md:grid-rows-3">
          <div className="md:col-span-1 row-span-1 row-start-1 bg-yellow-200 rounded-2xl flex justify-end">
               <Image
                  className=" w-full rounded-2xl"
                  src={'/dab.svg'}
                  alt="dab"
                  width={450}
                  height={100}
                />
          </div>

          <div className="cols-span-1 row-span-1 row-start-2 rounded-2xl bg-gray-100 flex justify-end">
          <Image
                  className=" w-full rounded-2xl"
                  src={'/bongImage.svg'}
                  alt="dab"
                  width={450}
                  height={100}
                />
          </div>

          <div className="md:col-span-1 col-span-3 md:row-span-2 row-span-1  md:col-start-2 col-start-1 bg-purple-200 rounded-2xl flex justify-end">
          <Image
                  className="md:h-full h-[400px] w-full rounded-2xl"
                  src={'/Vapes.svg'}
                  alt="dab"
                  width={450}
                  height={100}
                />
          </div>

          <div className="col-span-1 row-span-1 col-start-3 row-start-1 bg-blue-100 rounded-2xl flex justify-end">
          <Image
                  className=" w-full rounded-2xl"
                  src={'/pipes.svg'}
                  alt="dab"
                  width={450}
                  height={100}
                />
          </div>

          <div className="col-span-1 row-span-1 col-start-3 row-start-2 bg-green-200 rounded-2xl flex justify-end">
          <Image
                  className=" w-full rounded-2xl"
                  src={'/Grinder.svg'}
                  alt="dab"
                  width={450}
                  height={100}
                />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DealsSection;
{
  /* <div className="sm:grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 ">
          {DealsData.map((deal, i) => {
            return (
              <div key={i} className="flex mb-10 relative"> 
             
                <div className="flex flex-col justify-evenly absolute">
                  <p className="text-white bg-red-600 rounded-full text-center px-3 py-1 ">
                    {deal.sale}
                  </p>
                  <div className="flex flex-col justify-end  ">
                    <p className="whitespace-nowrap text-2xl font-semibold">
                      {deal.name}
                    </p>
                    <p className="text-xl font-medium">{deal.price}</p>
                  </div>
                </div>
              
              </div>
            );
          })}
        </div> */
}
