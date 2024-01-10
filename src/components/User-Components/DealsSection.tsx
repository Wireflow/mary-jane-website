import React from "react";
import Section from "../ui/section";
import { DealsData } from "@/data/DealsData";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {};

const DealsSection = (props: Props) => {
  return (
    <Section>
      <div className="flex flex-col gap-10">
        <h2 className="text-black md:text-5xl text-4xl font-semibold">Deals</h2>
        <div className="grid md:grid-cols-3 gap-5 2xl:h-[700px] lg:h-[500px] md:h-[400px]">

          <div className="grid grid-cols-1 gap-5 ">
            <div className=" bg-gray-200 rounded-2xl relative overflow-hidden md:h-full h-[300px] " style={{backgroundImage: 'url(WeedImage.png)', backgroundRepeat: 'no-repeat', backgroundSize: '700px '}}>
              <div className="flex flex-col items-start lg:p-10 p-3 gap-2">
                <h2 className="2xl:text-4xl lg:text-2xl  font-bold">THC & CBD</h2>
                <Link className="flex  gap-2 md:text-lg text-md " href={"/"}>
                  View all <ArrowRight size={25} />
                </Link>
              </div>
            </div>
            <div className=" rounded-2xl  bg-rose-100 relative md:h-full h-[300px] " style={{backgroundImage: 'url(bong.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: '500px ', backgroundPosition: '0px top'}}>
              <div className="flex flex-col items-start lg:p-10 p-3 gap-2">
                <h2 className="2xl:text-4xl lg:text-2xl  font-bold">Bongs</h2>
                <Link
                  className="flex items-center gap-2 md:text-lg text-md "
                  href={"/"}
                >
                  View all <ArrowRight size={25} />
                </Link>
              </div>
            
            </div>
          </div>

          <div className=" bg-purple-200 rounded-2xl relative overflow-hidden md:h-full h-[400px]" style={{backgroundImage: 'url(Vape.png)', backgroundRepeat: 'no-repeat', backgroundSize: '1200px ', backgroundPosition: 'right'}}>
          <div className="flex flex-col items-start lg:p-10 p-3 gap-2">
              <h2 className="2xl:text-4xl lg:text-2xl  font-bold">Vapes</h2>
              <Link
                className="flex items-center gap-2 md:text-lg text-md "
                href={"/"}
              >
                View all <ArrowRight size={25} />
              </Link>
            </div>
         
          </div>

          <div className="grid grid-cols-1 gap-5">
            <div className=" bg-blue-100 rounded-2xl relative overflow-hidden md:h-full h-[200px]" style={{backgroundImage: 'url(Pipe.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: '700px '}}>
            <div className="flex flex-col items-start lg:p-10 p-3 gap-2"> 
                <h2 className="2xl:text-4xl lg:text-2xl  font-bold">Pipes</h2>
                <Link
                  className="flex items-center gap-2 md:text-lg text-md "
                  href={"/"}
                >
                  View all <ArrowRight size={25} />
                </Link>
              </div>
              {/* <Image
                className="absolute 2xl:bottom-1 md:-bottom-[10px] bottom-0 md:-right-10 -right-10 2xl:w-[300px] lg:w-60 md:w-40 w-[300px]"
                src={"/dabrig.svg"}
                alt="dab"
                width={350}
                height={100}
              /> */}
            </div>
            <div className=" bg-green-200 rounded-2xl relative overflow-hidden lg:h-full h-[350px]   " style={{backgroundImage: 'url(Grinders.webp)', backgroundRepeat: 'no-repeat', backgroundSize: '700px '}}>
            <div className="flex flex-col items-start lg:p-10 p-3 gap-2 absolute">
                <h2 className="2xl:text-4xl lg:text-2xl  font-bold">Grinders</h2>
                <Link
                  className="flex items-center gap-2 md:text-lg text-md "
                  href={"/"}
                >
                  View all <ArrowRight size={25} />
                </Link>
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
