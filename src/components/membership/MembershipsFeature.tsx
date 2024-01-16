import React from "react";

type MembershipsFeatureProps = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

const MembershipsFeature = (props: MembershipsFeatureProps) => {
  return (
    <div className="flex gap-3 items-start lg:max-w-[550px]">
      <div className="bg-theme-purple/30 p-1.5 w-fit rounded-full mb-2">
        <div className="bg-theme-purple/80 p-2 rounded-full">
          {props.icon &&
            React.cloneElement(props.icon, {
              className: "w-6 h-6 text-theme-white ",
            })}
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <p className="font-bold text-theme-black text-base md:text-lg mb-1">
          {props.title}
        </p>
        <p className="text-gray-900">{props.description}</p>
      </div>
    </div>
  );
};

export default MembershipsFeature;
