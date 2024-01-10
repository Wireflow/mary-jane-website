import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type LocationCardProps = {
  icon: React.ReactElement;
  title: string;
  openingTimes?: string;
  location: string;
  callToAction?: string;
  callToActionLink?: string;
};

const LocationCard = (props: LocationCardProps) => {
  return (
    <div className=" gap-3  lg:max-w-[450px]">
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
        {props.openingTimes && (
          <p className="text-gray-400 font-light lg:max-w-[500px]">
            {props.openingTimes}
          </p>
        )}
        <p className="text-theme-white lg:max-w-[500px] font-bold">
          {props.location}
        </p>
        {props.callToAction && (
          <Link
            href={props.callToActionLink || "/"}
            passHref
            target="_blank"
            rel="noreferror"
          >
            <p className="flex items-center gap-2 text-theme-yellow font-semibold cursor-pointer hover:underline underline-offset-8">
              {props.callToAction}{" "}
              <MoveRight className="w-6 h-6 mt-0.5 text-theme-white" />
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LocationCard;
