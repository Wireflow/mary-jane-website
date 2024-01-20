import React from "react";
import Circle from "../ui/circle";

type Props = {};

const HeroCircles = (props: Props) => {
  return (
    <>
      <Circle
        width={350}
        color="purple"
        opacity={50}
        className="-bottom-[20%] -left-[5%] hidden md:block z-10"
      />
      <Circle
        width={200}
        color="purple"
        opacity={50}
        className="-top-[5%] -left-[2%] hidden md:block -z-40"
      />
      <Circle
        width={200}
        color="white"
        opacity={10}
        className="top-[3%] right-[1%] hidden md:block -z-10"
      />
      <Circle
        width={300}
        color="white"
        opacity={10}
        className="-bottom-[40%] left-1/2 hidden md:block -z-10"
      />
      <Circle
        width={100}
        color="white"
        opacity={20}
        className="bottom-[10%] right-[5%] hidden md:block -z-10"
      />
    </>
  );
};

export default HeroCircles;
