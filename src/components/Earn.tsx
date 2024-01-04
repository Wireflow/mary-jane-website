import React from "react";
import Section from "./ui/section";
import Image from "next/image";

type Props = {};

const Earn = (props: Props) => {
  return (
    <Section className="bg-black text-white " >
      <div className="flex flex-col gap-10">
          <div>
            <h2>
              Earn Points For Every{" "}
              <span className="text-theme-yellow">Purchase</span>
            </h2>
            <p>*Must create an account to start earning points*</p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col justify-center items-center gap-3">
              <Image src={"/ReceivePoint.svg"} alt="Earn-icon" width={100} height={100} />
              <p>10 Points For Each Dollar Spent</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <Image src={"/Gift.svg"} alt="Earn-icon" width={100} height={100} />
              <p>Redeem your points for items in shop!</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <Image src={"/VIP.svg"} alt="Earn-icon" width={100} height={100} />
              <p>Exclusive perks & Deals sent directly to your email</p>
            </div>
          
          </div>
      </div>
    </Section>
  );
};

export default Earn;
