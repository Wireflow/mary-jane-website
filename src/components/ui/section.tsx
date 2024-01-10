import React from "react";
import { twMerge } from "tailwind-merge";

type SectionContainerProps = {
  children?: React.ReactNode;
  backgroundImage?: string;
  className?: string;
  background?: "white" | "black" | "yellow" | "purple";
  size?: "sm" | "md" | "lg" | "xs";
  maxWidth?: string | number;
  id?: string;
};

const Section = ({
  children,
  backgroundImage,
  className,
  id,
  background = "white",
  maxWidth = 1420,
  size = "lg",
}: SectionContainerProps) => {
  const bg_variants = {
    black: "bg-theme-black",
    purple: "bg-theme-purple",
    yellow: "bg-theme-yellow",
    white: "bg-theme-white",
  };

  const size_variants = {
    sm: "p-6 md:p-8 lg:p-10",
    md: "p-8 md:p-10 lg:p-14",
    lg: "p-8 md:p-16 lg:p-28",
    xs: "px-8 md:px-16 lg:px-28",
  };

  return (
    <div
      id={id}
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
