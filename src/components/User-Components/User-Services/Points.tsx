import React from "react";

type PointsProps = {
  points?: number;
};

const Points = ({ points }: PointsProps) => {
  return (
    <div className="border border-black p-5 rounded-lg flex flex-col gap-6 h-40 md:w-60 w-full">
      <p className="text-xl font-medium">Points Earned</p>
      <h2 className="text-center md:text-6xl text-5xl font-semibold ">
        {points}
      </h2>
    </div>
  );
};

export default Points;
