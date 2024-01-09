import React from "react";
import Section from "./ui/section";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {};

const Membership = (props: Props) => {
  return (
    <Section  size="lg" className="bg-white relative ">
      <div className="flex xl:flex-row flex-col gap-10 w-full sm:mt-[0px] mt-[20px]  ">
        <div className="flex flex-col  gap-3">
          <p className="font-bold text-theme-purple sm:text-md text-sm">
            VIP Memberships
          </p>
          <h1 className="2xl:text-7xl sm:text-6xl text-4xl 2xl:w-[600px] sm:w-[420px] w-[220px] font-semibold">
            Mary Jane Social Club Memberships
          </h1>
          <p className=" xl:w-full lg:w-[400px] w-full font-medium">
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </p>
        </div>
        <div className="flex justify-center flex-col sm:flex-row   lg:gap-10 gap-3 text-white w-full  ">
          <div className="bg-black  xl:w-[320px] w-full  rounded-xl p-5 flex flex-col gap-7 ">
            <h2 className="text-5xl text-center mt-10 font-medium">
              $10<span className="text-lg ">/Month</span>
            </h2>
            <div>
              <p className="text-md text-center font-medium">Basic Member</p>
              <p className="text-sm text-center font-extralight">
                Billed Monthly
              </p>
            </div>
            <div className=" flex flex-col  gap-5">
              <div className="flex gap-3 items-center">
                <Image
                  src={"/CheckIcon.png"}
                  alt="check-icon"
                  width={30}
                  height={30}
                />
                <p className="text-sm">Connect with friends</p>
              </div>
              <div className="flex gap-3 items-center">
                <Image
                  src={"/CheckIcon.png"}
                  alt="check-icon"
                  width={30}
                  height={30}
                />
                <p className="text-sm">Enjoy smoking, vaping, or edibles</p>
              </div>
              <div className="flex gap-3 items-center">
                <Image
                  src={"/CheckIcon.png"}
                  alt="check-icon"
                  width={30}
                  height={30}
                />
                <p className="text-sm">Chill in comfortable seating</p>
              </div>
              <div className="flex gap-3 items-center">
                <Image
                  src={"/CheckIcon.png"}
                  alt="check-icon"
                  width={30}
                  height={30}
                />
                <p className="text-sm">
                  Have a quiet space for reading, studying
                </p>
              </div>
            </div>
            <Button className="bg-theme-yellow text-black font-bold" disabled>
              Coming Soon
            </Button>
          </div>

          <div className="bg-black  xl:w-[320px] w-full  rounded-xl p-5 flex flex-col gap-7 ">
            <h2 className="text-5xl text-center mt-10 font-medium">
              $20<span className="text-lg ">/Month</span>
            </h2>
            <div>
              <p className="text-md text-center font-medium">VIP Member</p>
              <p className="text-sm text-center font-extralight">
                Billed Monthly
              </p>
            </div>
            <div className=" flex flex-col  gap-5">
              <div className="flex gap-3 items-center">
                <Image
                  src={"/CheckIcon.png"}
                  alt="check-icon"
                  width={30}
                  height={30}
                />
                <p className="text-sm">Connect with friends</p>
              </div>
              <div className="flex gap-3 items-center">
                <Image
                  src={"/CheckIcon.png"}
                  alt="check-icon"
                  width={30}
                  height={30}
                />
                <p className="text-sm">Enjoy smoking, vaping, or edibles</p>
              </div>
              <div className="flex gap-3 items-center">
                <Image
                  src={"/CheckIcon.png"}
                  alt="check-icon"
                  width={30}
                  height={30}
                />
                <p className="text-sm">Chill in comfortable seating</p>
              </div>
              <div className="flex gap-3 items-center">
                <Image
                  src={"/CheckIcon.png"}
                  alt="check-icon"
                  width={30}
                  height={30}
                />
                <p className="text-sm">
                  Have a quiet space for reading, studying
                </p>
              </div>
            </div>
            <Button className="bg-theme-yellow text-black font-bold" disabled>
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 xl:block hidden">
        <Image src={"/WeedLeaf.svg"} alt="leaf" width={400} height={400} />
      </div>
      <div className="absolute right-0 top-0 xl:hidden block">
        <Image
          className="lg:w-[450px] md:w-[400px] sm:w-[300px] w-[150px]"
          src={"/TopWeedLeaf.svg"}
          alt="leaf"
          width={450}
          height={400}
        />
      </div>
    </Section>
  );
};

export default Membership;
