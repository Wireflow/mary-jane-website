import React from "react";
import Circle from "../ui/circle";

type Props = {};

const MembershipCircles = (props: Props) => {
  return (
    <>
      <Circle
        width={350}
        color="purple"
        opacity={10}
        className="-top-[5%] -left-[5%] hidden md:block"
      />
      <Circle
        width={450}
        color="yellow"
        opacity={10}
        className="bottom-[.5%] md:-bottom-[25%] -left-40 md:left-[20%]"
      />
      <Circle
        width={300}
        color="purple"
        opacity={5}
        className="-right-40 md:right-[5%] lg:right-[10%] top-[15%] lg:top-[10%]"
      />
      <Circle
        width={200}
        color="yellow"
        opacity={10}
        className="left-[45%] top-1/2"
      />
      <Circle
        width={200}
        color="purple"
        opacity={25}
        className="right-[5%] bottom-[5%]"
      />
    </>
  );
};

export default MembershipCircles;
