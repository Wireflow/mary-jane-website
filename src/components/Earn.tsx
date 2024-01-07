import React from "react";
import Section from "./ui/section";
import Image from "next/image";

type Props = {};

const Earn = (props: Props) => {
  return (
    <Section  className="bg-black text-white " >
      <div className="flex flex-col gap-10">
          <div>
            <h2 className="lg:text-5xl md:text-4xl text-3xl">
              Earn Points For Every{" "}
              <span className="text-theme-yellow">Purchase</span>
            </h2>
            <p className="md:text-lg text-sm pt-1">*Must create an account to start earning points*</p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
            <div className="flex flex-col sm:justify-center sm:items-center gap-3">
              <Image className="md:w-[80px] w-[60px]" src={"/ReceivePoint.svg"} alt="Earn-icon" width={100} height={100} />
              <p className="sm:text-center sm:text-lg sm:w-60">10 Points For Each Dollar Spent</p>
            </div>
            <div className="flex flex-col sm:justify-center sm:items-center gap-3">
              <Image className="md:w-[80px] w-[60px]" src={"/Gift.svg"} alt="Earn-icon" width={100} height={100} />
              <p className="sm:text-center sm:text-lg sm:w-60">Redeem your points for items in shop!</p>
            </div>
            <div className="flex flex-col sm:justify-center sm:items-center gap-3 flex-grow lg:col-span-1 col-span-full">
              <Image className="md:w-[80px] w-[60px]" src={"/VIP.svg"} alt="Earn-icon" width={100} height={100} />
              <p className="sm:text-center sm:text-lg sm:w-60">Exclusive perks & Deals sent directly to your email</p>
            </div>
          
          </div>
      </div>
    </Section>
  );
};

export default Earn;
