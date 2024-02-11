import React from "react";
import { twMerge } from "tailwind-merge";

export const bg_variants = {
  black: "bg-theme-black",
  purple: "bg-theme-purple",
  yellow: "bg-theme-yellow",
  white: "bg-theme-white",
  "light-purple": "bg-theme-purple/85",
};

const size_variants = {
  sm: "p-6 md:p-8 lg:p-10",
  md: "p-8 md:p-10 lg:p-14",
  lg: "p-8 md:p-14 lg:p-20",
  xl: "p-8 md:p-16 lg:p-28",
  xs: "px-8 md:px-16 lg:px-28",
};

type SectionContainerProps = {
  children?: React.ReactNode;
  backgroundImage?: string;
  className?: string;
  background?: keyof typeof bg_variants;
  size?: keyof typeof size_variants;
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
  size = "xl",
}: SectionContainerProps) => {
  return (
    <section
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
    </section>
  );
};

export default Section;
