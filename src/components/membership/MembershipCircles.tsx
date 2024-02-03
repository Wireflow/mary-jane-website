import React from "react";
import Circle from "../ui/circle";

type Props = {};

const MembershipCircles = (props: Props) => {
  return (
    <>
      <Circle
        size="md"
        color="purple"
        opacity={15}
        className="-top-[5%] -left-[5%] hidden md:block"
      />
      <Circle
        size="lg"
        color="yellow"
        opacity={15}
        className="bottom-[.5%] md:-bottom-[25%] -left-40 md:left-[20%]"
      />
      <Circle
        size="sm"
        color="purple"
        opacity={5}
        className="-right-40 md:right-[5%] lg:right-[10%] top-[15%] lg:top-[10%]"
      />
      <Circle
        size="sm"
        color="yellow"
        opacity={30}
        className="left-[45%] top-1/2"
      />
      <Circle
        size="xs"
        color="purple"
        opacity={30}
        className="right-[5%] bottom-[5%]"
      />
    </>
  );
};

export default MembershipCircles;
