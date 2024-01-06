import React from "react";
import AuthPage from "./authPage";
import Section from "@/components/ui/section";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  return (
    <div style={{ backgroundImage:'url(/backgroundLeaf.svg)', backgroundPosition: "130px -10px ", backgroundRepeat: "no-repeat" }} >
        <Section size="sm" backgroundImage="/" className="md:mt-0 bg-size-[500px] h-screen  mt-20">
      <AuthPage />
      {/* <div className="absolute bottom-0 left-0 z-10  md:block hidden ">
        <Image src={"/WeedLeaf.svg"} alt="leaf" width={300} height={400} />
      </div>  */}
     
    </Section>
    </div>
  
  );
};

export default page;
