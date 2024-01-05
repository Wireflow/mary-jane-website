import React from "react";
import Section from "./ui/section";
import { Button } from "./ui/button";

type Props = {};

const Directions = (props: Props) => {
  return (
    <Section className="bg-white" size="sm">
      <div className="flex flex-col items-center gap-6">
        <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-2xl text-black font-bold">
          Where you can <span className="text-theme-purple">find</span> us
        </h1>
        <Button className="sm:px-[50px] px-[30px] py-5 text-[12px] bg-theme-yellow text-black font-bold">
          Get Directions
        </Button>
      </div>
    </Section>
  );
};

export default Directions;
