import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

type ThemeColors = "white" | "black" | "yellow" | "purple";
type Positions = "left" | "center" | "right";

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
  position?: Positions;
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
  position = "center",
  width,
  ...props
}: HeadingProps) => {
  const widthBasedOnPosition =
    position === "left" && width
      ? width
      : position === "left"
      ? undefined
      : 600;

  return (
    <div
      className={cn(badgeColors[badgeColor], {
        "text-center mx-auto": position === "center",
        "text-left": position === "left",
      })}
      style={{ maxWidth: widthBasedOnPosition }}
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
