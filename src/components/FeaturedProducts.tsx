"use client"

import React, { useState } from "react";
import Section from "./ui/section";
import Image from "next/image";
import { Plus } from "lucide-react";

type Props = {};

const FeaturedProducts = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Section size="sm">
      <div className="flex flex-col gap-5">
        <h2 className="md:text-4xl text-2xl font-semibold uppercase">
          Featured{" "}
          <span className="font-extrabold text-theme-purple">products</span>
        </h2>
        <div className="grid lg:grid-cols-4 grid-cols-2 place-content-center place-items-center">
            <div
              className="flex flex-col gap-2 w-fit rounded-b-xl p-2 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative overflow-hidden group-hover:scale-95 transition-transform">
                <Image
                  className="md:rounded-3xl rounded-lg md:p-4 transition-filter transition-opacity"
                  src={isHovered ? "/vape-hover.png" : "/vapes.png"}
                  alt="vape"
                  width={300}
                  height={300}
                />
                <div className="absolute right-4 bottom-4 rounded-br-sm bg-theme-purple p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus color="white" />
                </div>
              </div>
              <div className="flex flex-col items-center  ">
                <h3 className="font-semibold md:text-2xl text-xl">Mod Vape</h3>
                <p className="font-medium text-xl text-gray-600">14.99</p>
              </div>
            </div>
            <div
              className="flex flex-col gap-2 w-fit rounded-b-xl p-2 group"
              
            >
              <div className="relative overflow-hidden group-hover:scale-95 transition-transform">
                <Image
                  className="rounded-3xl  md:p-4 transition-filter transition-opacity"
                  src={ "/Bong.png"}
                  alt="vape"
                  width={300}
                  height={300}
                />
                <div className="absolute right-4 bottom-4 rounded-br-lg bg-theme-purple p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus color="white" />
                </div>
              </div>
              <div className="flex flex-col items-center  ">
                <h3 className="font-semibold md:text-2xl text-xl">Bong</h3>
                <p className="font-medium text-xl text-gray-600">35.99</p>
              </div>
            </div>
            <div
              className="flex flex-col gap-2 w-fit rounded-b-xl p-2 group"
              
            >
              <div className="relative overflow-hidden group-hover:scale-95 transition-transform">
                <Image
                  className="rounded-3xl  md:p-4 transition-filter transition-opacity"
                  src={ "/RawPapers.png"}
                  alt="vape"
                  width={300}
                  height={300}
                />
                <div className="absolute right-4 bottom-4 rounded-br-lg bg-theme-purple p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus color="white" />
                </div>
              </div>
              <div className="flex flex-col items-center  ">
                <h3 className="font-semibold md:text-2xl text-xl">Raw Papers</h3>
                <p className="font-medium text-xl text-gray-600">1.99</p>
              </div>
            </div>
            <div
              className="flex flex-col gap-2 w-fit rounded-b-xl p-2 group"
              
            >
              <div className="relative overflow-hidden group-hover:scale-95 transition-transform">
                <Image
                  className="rounded-3xl  md:p-4 transition-filter transition-opacity"
                  src={ "/Grabba.png"}
                  alt="vape"
                  width={300}
                  height={300}
                />
                <div className="absolute right-4 bottom-4 rounded-br-lg bg-theme-purple p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus color="white" />
                </div>
              </div>
              <div className="flex flex-col items-center  ">
                <h3 className="font-semibold md:text-2xl text-xl">Grabba</h3>
                <p className="font-medium text-xl text-gray-600">14.99</p>
              </div>
            </div>
          
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProducts;
