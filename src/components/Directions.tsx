import React from "react";
import Section from "./ui/section";
import { Button } from "./ui/button";

type Props = {};

const Directions = (props: Props) => {
  return (
    <Section className="bg-black" size="sm">
      <div className="flex flex-col items-center gap-6">
        <h1 className="sm:text-5xl text-3xl text-white font-bold">
          Where you can <span className="text-theme-yellow">find</span> us
        </h1>
        <Button className="sm:px-[50px] px-[30px] py-5 text-[12px] bg-theme-yellow text-black font-bold">
          Get Directions
        </Button>
      </div>
    </Section>
  );
};

export default Directions;
