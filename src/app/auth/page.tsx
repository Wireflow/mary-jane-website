import React from "react";
import AuthPage from "./authPage";
import Section from "@/components/ui/section";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  return (
    <Section size="sm" className="md:mt-0   mt-20">
      <AuthPage />
      <div className="absolute bottom-0 left-0 z-10  md:block hidden ">
        <Image src={"/WeedLeaf.svg"} alt="leaf" width={300} height={400} />
      </div> 
     
    </Section>
  );
};

export default page;
