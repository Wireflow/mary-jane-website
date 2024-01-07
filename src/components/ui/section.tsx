import React from "react";
import { twMerge } from "tailwind-merge";

type SectionContainerProps = {
  children?: React.ReactNode;
  backgroundImage?: string;
  className?: string;
  background?: "white" | "light-blue" | "black" | "dark-blue" | "pitch-black";
  size?: "sm" | "md" | "lg" | "xs";
  maxWidth?: string | number;
};

const Section = ({
  children,
  backgroundImage,
  className,
  background = "white",
  maxWidth = 1420,
  size = "lg",
}: SectionContainerProps) => {
  const bg_variants = {
    white: "bg-white",
    "light-blue": "bg-light-blue",
    black: "bg-darker-blue",
    "dark-blue": "bg-dark-blue",
    "pitch-black": "bg-black",
  };

  const size_variants = {
    sm: "p-6 md:p-8 lg:p-10",
    md: "p-8 md:p-10 lg:p-14",
    lg: "p-8 md:p-16 lg:p-28",
    xs: "px-8 md:px-16 lg:px-28 my-10"
  };

  return (
    <div
      className={twMerge(
        "bg-no-repeat bg-cover",
        bg_variants[background],
        size_variants[size],
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div style={{ maxWidth: maxWidth }} className="mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Section;
