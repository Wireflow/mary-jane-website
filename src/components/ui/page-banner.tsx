import React from "react";
import Section from "./section";

type PageBannerProps = {
  title: string;
  description: string;
};

const PageBanner = (props: PageBannerProps) => {
  return (
    <Section
      className="text-center text-theme-white break-words"
      background="light-purple"
      size="md"
    >
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-5xl mb-2 font-bold">{props.title}</h2>
        <p className="md:text-md text-sm font-medium">{props.description}</p>
      </div>
    </Section>
  );
};

export default PageBanner;
