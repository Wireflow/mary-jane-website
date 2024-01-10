"use client";

import React from "react";
import Section from "./ui/section";
import EarnPointsBadget from "./EarnPointsBadget";
import { Button } from "./ui/button";
import RegisterHeroForm from "./forms/RegisterHeroForm";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

type Props = {};

const HeroSection = (props: Props) => {
  const { data: session, status } = useSession();
  const userName = session?.user?.name;
  const capitalizedUserName = userName
    ? userName.charAt(0).toUpperCase() + userName.slice(1)
    : null;

  return (
    <Section backgroundImage="/img-hero.png">
      <div className="mt-16 flex md:flex-row flex-col gap-10 items-start md:items-center justify-between">
        <div className="flex flex-col gap-4">
          <EarnPointsBadget />
          <h1 className="text-theme-white sm:text-7xl text-3xl md:text-4xl lg:text-4xl xl:text-7xl font-bold ">
            MARY JANE <br className="md:block hidden" /> SOCIAL CLUB
          </h1>
          <p className="font-semibold text-theme-yellow max-w-[500px]">
            Where every purchase takes you closer to exclusive rewards! Join the
            movement – Inhale the Benefits!
          </p>
          <Link href={"#memberships-section"}><Button className="w-fit px-6">Become a Member</Button></Link>
        </div>
        {status == "authenticated" ? (
          <div className="bg-white  md:w-[600px] w-full  rounded-xl p-5">
            <div className="flex justify-between">
              <h2 className=" text-xl font-bold leading-[2rem] relative"> 
               <span className="font-normal">Welcome back,</span> <br/>
                 {''} {capitalizedUserName}
              </h2>
              <Link className="flex flex-col text-[12px] items-center font-medium"  passHref href={"/account"}>
              
                <ArrowUp
                  className="text-black w-12 h-12 rotate-45"
                  strokeWidth={1.2}
                />  Account
              </Link>
            </div>
            <div>

            </div>
          </div>
        ) : (
          <RegisterHeroForm />
        )}
      </div>
    </Section>
  );
};

export default HeroSection;
