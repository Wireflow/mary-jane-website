import React from "react";
import Section from "./section";
import { bg_variants } from "./section";
import { cn } from "@/lib/utils";

type PageBannerProps = {
  title: string;
  description?: string;
  background?: keyof typeof bg_variants;
  left?: boolean;
};

const PageBanner = ({
  background = "light-purple",
  ...props
}: PageBannerProps) => {
  return (
    <Section
      className={cn("text-theme-white break-words", {
        "text-center": !props.left,
      })}
      background={background}
      size="md"
    >
      <div className={cn({ "max-w-[800px] mx-auto": !props.left })}>
        <h2
          className={cn("text-3xl md:text-5xl mb-2 font-bold", {
            "text-theme-black/70": background === "white",
          })}
        >
          {props.title}
        </h2>
        {props.description && (
          <p className="md:text-md text-sm font-medium">{props.description}</p>
        )}
      </div>
    </Section>
  );
};

export default PageBanner;
