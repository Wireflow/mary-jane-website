import React from "react";

type NewsBannerProps = {
  text: string;
  newsText?: string;
};

const NewsBanner = (props: NewsBannerProps) => {
  return (
    <div className="bg-theme-yellow py-3 text-center">
      {props.text} <span className="font-bold">{props.newsText}</span>
    </div>
  );
};

export default NewsBanner;
