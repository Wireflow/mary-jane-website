import React from "react";
import AuthPage from "./authPage";
import Section from "@/components/ui/section";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  return (
    <Section size="sm" className="md:mt-0   mt-20">
      <AuthPage />
      <div className="absolute md:-bottom-[50px] -bottom-[70px] left-0 z-10 ">
        <Image src={"/WeedLeaf.svg"} alt="leaf" width={400} height={400} />
      </div>
    </Section>
  );
};

export default page;
