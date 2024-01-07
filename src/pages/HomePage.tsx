import ComingSoon from "@/components/ComingSoon";
import Directions from "@/components/Directions";
import Earn from "@/components/Earn";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Membership from "@/components/Membership";
import NewsBanner from "@/components/layout/NewsBanner";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <HeroSection />
      <ComingSoon/>
      <Earn/>
      <Membership/>
      <Directions/>
      <Footer/>
    </div>
  );
};

export default HomePage;
