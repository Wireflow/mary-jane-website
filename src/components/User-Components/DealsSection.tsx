import React from "react";
import Section from "../ui/section";
import { DealsData } from "@/data/DealsData";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {};

const DealsSection = (props: Props) => {
  return (
    <Section background="white" size="sm">
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-black md:text-3xl text-2xl ml-2 font-semibold uppercase">Smokey <span className="text-theme-purple uppercase font-extrabold ">Essentials</span></h2>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-3 md:grid-rows-1 grid-rows-1 gap-5 2xl:h-[700px] lg:h-[500px] md:h-[400px]">
          <div
            className=" bg-purple-200 rounded-2xl relative flex justify-end flex-col overflow-hidden md:h-full h-[300px] "
            style={{
              backgroundImage: "url(Vape.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover ",
              backgroundPosition: "right",
            }}
          >
            <div className="flex flex-col items-start lg:p-5 p-5  text-white row-start-2">
              <h2 className="2xl:text-4xl text-2xl  font-bold">Vapes</h2>
              <Link
                className="flex items-center gap-2 md:text-lg text-sm font-semibold "
                href={"/"}
              >
                View all <ArrowRight size={25} className="-rotate-45" />
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 lg:col-span-1 md:col-span-2 ">
            <div className="grid grid-cols-1 gap-5 ">
              <div
                className=" bg-gray-200 rounded-2xl relative flex justify-end flex-col  overflow-hidden md:h-full sm:h-[300px]  h-[200px]"
                style={{
                  backgroundImage: "url(Weed.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover ",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col items-start  lg:p-5 p-5 text-white">
                  <h2 className="2xl:text-4xl text-2xl  font-bold">Herbs</h2>
                  <Link className="flex  gap-2 md:text-lg text-sm font-semibold" href={"/"}>
                    View all <ArrowRight size={25} className="-rotate-45" />
                  </Link>
                </div>
              </div>
              <div
                className=" rounded-2xl  bg-rose-100 flex justify-end flex-col relative md:h-full sm:h-[300px] h-[200px]"
                style={{
                  backgroundImage: "url(Bong.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover ",
                  backgroundPosition: "left",
                }}
              >
                <div className="flex flex-col items-start lg:p-5 p-5 text-white">
                  <h2 className="2xl:text-4xl text-2xl  font-bold">Bongs</h2>
                  <Link
                    className="flex items-center gap-2 md:text-lg text-sm font-semibold"
                    href={"/"}
                  >
                    View all <ArrowRight size={25} className="-rotate-45"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 ">
              <div
                className=" bg-gray-200 rounded-2xl relative flex justify-end flex-col  overflow-hidden md:h-full sm:h-[300px] h-[200px]"
                style={{
                  backgroundImage: "url(Pipe.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover ",
                  backgroundPosition: 'left top '
                }}
              >
                <div className="flex flex-col items-start lg:p-5 p-5  text-white ">
                  <h2 className="2xl:text-4xl text-2xl font-bold">Pipes</h2>
                  <Link
                    className="flex items-center gap-1 md:text-lg text-sm "
                    href={"/"}
                  >
                    View all <ArrowRight size={25} className="-rotate-45" />
                  </Link>
                </div>
              </div>
              <div
                className=" rounded-2xl  bg-rose-100 relative flex justify-end flex-col  md:h-full sm:h-[300px] h-[200px] "
                style={{
                  backgroundImage: "url(Grinder.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "left",
                }}
              >
                <div className="flex flex-col items-start lg:p-5 p-5 text-white ">
                  <h2 className="2xl:text-4xl text-2xl  font-bold">Grinders</h2>
                  <Link
                    className="flex items-center gap-1 md:text-lg text-sm font-semibold"
                    href={"/"}
                  >
                    View all <ArrowRight size={25} className="-rotate-45" />
                  </Link>
                </div>
              </div>
            </div>
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
