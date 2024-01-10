import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Memberships from "@/components/Memberships";
import Features from "../Features";
import Location from "../Location";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <HeroSection />
      <ComingSoon />
      <Features />
      <Memberships />
      <Location />
      <Footer />
    </div>
  );
};

export default HomePage;
