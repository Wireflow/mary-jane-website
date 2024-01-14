import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

type ThemeColors = "white" | "black" | "yellow" | "purple";

const headingVariants = cva("font-bold", {
  variants: {
    variant: {
      default: "text-theme-black",
      purple: "text-theme-purple",
      yellow: "text-theme-yellow",
      white: "text-theme-white",
    },
    size: {
      md: "text-3xl md:text-5xl",
      sm: "text-2xl md:text-4xl",
      lg: "text-4xl md:text-6xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface HeadingProps
  extends HTMLAttributes<HTMLHeadElement>,
    VariantProps<typeof headingVariants> {
  badge?: string;
  title: string;
  description?: string;
  width?: number;
  badgeColor?: ThemeColors;
  descriptionColor?:
    | "gray"
    | "light-gray"
    | "black"
    | "white"
    | "yellow"
    | "purple";
}

const badgeColors = {
  black: "text-theme-black",
  purple: "text-theme-purple",
  yellow: "text-theme-yellow",
  white: "text-theme-white",
};

const descriptionColors = {
  gray: "text-gray-500",
  black: "text-theme-black",
  purple: "text-theme-purple",
  yellow: "text-theme-yellow",
  white: "text-theme-white",
  "light-gray": "text-gray-400",
};

const Heading = ({
  className,
  variant,
  size,
  badgeColor = "purple",
  descriptionColor = "gray",
  width = 580,
  ...props
}: HeadingProps) => {
  return (
    <div
      className={cn(`sm:text-center sm:mx-auto`, badgeColors[badgeColor])}
      style={{ maxWidth: width }}
    >
      <p className="font-bold">{props.badge}</p>
      <h2 className={cn(headingVariants({ className, variant, size }))}>
        {props.title}
      </h2>
      <p
        className={cn(
          "mt-3 text-gray-500",
          descriptionColors[descriptionColor]
        )}
      >
        {props.description}
      </p>
    </div>
  );
};

export default Heading;
