import { cn } from "@/lib/utils";
import React from "react";

type Sizes = "xs" | "sm" | "md" | "lg" | "xl";
type Colors = "purple" | "yellow" | "white" | "black";

type Opacity =
  | 5
  | 10
  | 15
  | 20
  | 25
  | 30
  | 35
  | 40
  | 45
  | 50
  | 55
  | 60
  | 65
  | 70
  | 75
  | 80
  | 85
  | 90
  | 95;

type CircleProps = {
  size?: Sizes;
  color?: Colors;
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

  const sizeOptions = {
    xs: "w-[100px] h-[100px]",
    sm: "w-[200px] h-[200px]",
    md: "w-[300px] h-[300px]",
    lg: "w-[400px] h-[400px]",
    xl: "w-[500px] h-[500px]",
  };

  const colorOptions = {
    purple: "bg-theme-purple",
    yellow: "bg-theme-yellow",
    white: "bg-theme-white",
    black: "bg-theme-black",
  };

  const circleColor = opacity
    ? `${colorOptions[color]}/${opacity}`
    : colorOptions[color];

  const circleSize = width
    ? `w-[${width}px] h-[${width}px]`
    : sizeOptions[size];

  return <div className={cn(bioler, circleColor, circleSize, className)} />;
};

export default Circle;
