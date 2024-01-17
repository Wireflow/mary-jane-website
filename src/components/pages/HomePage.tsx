import ComingSoon from "@/components/ComingSoon";
import HeroSection from "@/components/hero/HeroSection";
import Memberships from "@/components/membership/Memberships";
import FeaturedProducts from "../FeaturedProducts";
import Features from "../Features";
import Location from "../Location";
import DealsSection from "../User-Components/DealsSection";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <HeroSection />
      <ComingSoon />
      <DealsSection />
      <FeaturedProducts />
      <Features />
      <Memberships />
      <Location />
    </>
  );
};

export default HomePage;
