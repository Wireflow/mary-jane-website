import React from "react";
import Section from "./ui/section";
import EarnPointsBadget from "./EarnPointsBadget";
import { Button } from "./ui/button";
import RegisterHeroForm from "./forms/RegisterHeroForm";

type Props = {};

const HeroSection = (props: Props) => {
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
        <RegisterHeroForm />
      </div>
    </Section>
  );
};

export default HeroSection;
