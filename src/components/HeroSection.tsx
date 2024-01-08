"use client";

import React from "react";
import Section from "./ui/section";
import EarnPointsBadget from "./EarnPointsBadget";
import { Button } from "./ui/button";
import RegisterHeroForm from "./forms/RegisterHeroForm";
import { useSession } from "next-auth/react";
import Link from "next/link";

type Props = {};

const HeroSection = (props: Props) => {
  const session = useSession();

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
          <Button className="w-fit px-6">Become a Member</Button>
        </div>
        {status == "authenticated" ? (
          <div>
            <h2 className="text-theme-white text-4xl font-bold leading-[2.5rem]">
              <span className="font-thin">Welcome back</span> <br />
              {session.data?.user?.name}
            </h2>
            <Link passHref href={"/account"}>
              <Button variant={"secondary"} className="font-bold mt-4">
                Visit Dashboard
              </Button>
            </Link>
          </div>
        ) : (
          <RegisterHeroForm />
        )}
      </div>
    </Section>
  );
};

export default HeroSection;
