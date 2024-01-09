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
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 md:grid-rows-2 2xl:h-[700px] lg:h-[500px] md:h-[400px]">

          <div className="md:col-span-1 col-span-3 row-span-1  bg-gray-200 rounded-2xl relative overflow-hidden md:h-full h-[300px]">
            <h2 className="2xl:text-4xl text-2xl p-10 font-bold">THC & CBD</h2>
            {/* <Image
              className="rounded-2xl absolute lg:-bottom-10 -bottom-6 lg:-right-[5rem] -right-[3rem] 2xl:w-[300px] lg:w-60 md:w-40 w-60"
              src={"/dab.svg"}
              alt="dab"
              width={450}
              height={100}
            /> */}
          </div>

          <div className="md:col-span-1 col-span-3 row-span-1 md:row-start-2  rounded-2xl  bg-rose-100 relative md:h-full h-[300px]">
            <h2 className="2xl:text-4xl text-2xl p-10 font-bold">Bongs</h2>
            <Image
              className="absolute bottom-0 lg:-right-10 -right-10 2xl:w-[300px] lg:w-60 md:w-40 w-80"
              src={"/bongImage.svg"}
              alt="dab"
              width={350}
              height={100}
            />
          </div>

          <div className="md:col-span-1 col-span-3 md:row-span-2 row-span-1 md:col-start-2 col-start-1 bg-purple-200 rounded-2xl relative overflow-hidden md:h-full h-[300px]">
            <h2 className="2xl:text-4xl text-2xl p-10 font-bold">vape</h2>
            <Image
              className="rounded-2xl absolute bottom-0 sm:-right-10 right-0 2xl:w-[400px] lg:w-80 md:w-60 w-[200px]"
              src={"/Vapes.svg"}
              alt="dab"
              width={550}
              height={550}
            />
          </div>

          <div className="md:col-span-1 col-span-3 row-span-1 md:col-start-3 col-start-1 row-start-1 bg-blue-100 rounded-2xl relative overflow-hidden md:h-full h-[300px]">
            <h2 className="2xl:text-4xl text-2xl p-10 font-bold">Pipes</h2>
            <Image
              className="absolute 2xl:bottom-1 md:-bottom-[10px] bottom-0 md:-right-10 -right-10 2xl:w-[300px] lg:w-60 md:w-40 w-[300px]"
              src={"/dabrig.svg"}
              alt="dab"
              width={350}
              height={100}
            />
          </div>

          <div className="md:col-span-1 col-span-3 row-span-1 md:col-start-3 md:row-start-2 bg-green-200 rounded-2xl relative overflow-hidden md:h-full h-[300px]">
            <h2 className="2xl:text-4xl text-2xl p-10 font-bold">Grinders</h2>
            <Image
              className="md:bottom-0 absolute bottom-0 right-0 2xl:w-[300px] lg:w-[200px] md:w-[150px] w-80"
              src={"/Grinder.svg"}
              alt="dab"
              width={300}
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
