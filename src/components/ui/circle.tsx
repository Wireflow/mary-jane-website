import { cn } from "@/lib/utils";
import React from "react";

const sizeOptions = {
  xs: "w-[150px] h-[150px]",
  sm: "w-[250px] h-[250px]",
  md: "w-[350px] h-[350px]",
  lg: "w-[450px] h-[450px]",
  xl: "w-[550px] h-[550px]",
  "2xl": "w-[650px] h-[650px]",
  "3xl": "w-[750px] h-[750px]",
};

const colorOptions = {
  purple: "bg-theme-purple",
  yellow: "bg-theme-yellow",
  white: "bg-theme-white",
  black: "bg-theme-black",
};

type CircleProps = {
  size?: keyof typeof sizeOptions;
  color?: keyof typeof colorOptions;
  width?: number;
  opacity?: number;
  className?: string;
};

const Circle = ({
  size = "xs",
  color = "purple",
  width,
  opacity,
  className,
}: CircleProps) => {
  const bioler = "absolute rounded-full border-2 border-gray-500/10";

  const circleColor = colorOptions[color];
  const circleOpacity = opacity ? opacity / 100 : undefined;

  const circleColorOpacity = circleColor + circleOpacity;

  const circleSize = width
    ? `w-[${width}px] h-[${width}px]`
    : sizeOptions[size];

  return (
    <div
      className={cn(bioler, colorOptions[color], circleSize, className)}
      style={{ opacity: circleOpacity }}
    />
  );
};

export default Circle;
