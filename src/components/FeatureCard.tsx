import { MoveRight } from "lucide-react";
import React from "react";

type FeatureCardProps = {
  icon: React.ReactElement;
  title: string;
  description: string;
  callToAction?: string;
};

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className=" gap-3 lg:max-w-[450px]">
      <div className="bg-theme-yellow/30 p-1.5 w-fit rounded-full mb-2">
        <div className="bg-theme-yellow/80 p-2 rounded-full">
          {props.icon &&
            React.cloneElement(props.icon, {
              className: "w-7 h-7 text-gray-700 ",
            })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-white">{props.title}</p>
        <p className="text-gray-400 font-light lg:max-w-[500px]">
          {props.description}
        </p>
        {props.callToAction && (
          <p className="flex items-center gap-2 text-theme-white cursor-pointer hover:underline underline-offset-8">
            {props.callToAction} <MoveRight className="w-6 h-6 mt-0.5" />
          </p>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
