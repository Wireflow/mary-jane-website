import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/hero/HeroSection";
import Memberships from "@/components/membership/Memberships";
import Features from "../Features";
import Location from "../Location";
import DealsSection from "../User-Components/DealsSection";
import FeaturedProducts from "../FeaturedProducts";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <HeroSection />
      <ComingSoon /> 
     
       <DealsSection />
        <FeaturedProducts/> 
      <Features />
    
     
      <Memberships />
      <Location />
    </div>
  );
};

export default HomePage;
