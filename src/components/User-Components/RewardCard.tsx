"use client"
import Image from "next/image";
import React from "react";

type RewardCardProps = {
  image: string;
  name: string;
  points: string;
  key?: number;
};

const RewardCard = ({ image, name, points, key }: RewardCardProps) => {
  return (
    <div key={key} className=" bg-stone-800 p-5 rounded-2xl  ">
      <Image
        className="rounded-xl "
        src={image}
        alt="papers"
        width={300}
        height={700}
      />
      <div className="flex justify-between mt-3 items-center">
        <div className="flex flex-col  ml-1">
          <h2 className="text-xl font-medium text-white">{name}</h2>
        </div>{" "}
        {/* <p className="text-sm text-gray-200">
          {points} <span className="text-theme-yellow">Points</span>
        </p> */}
      </div>
    </div>
  );
};

export default RewardCard;
