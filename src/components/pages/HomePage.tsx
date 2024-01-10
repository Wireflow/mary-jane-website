import ComingSoon from "@/components/ComingSoon";
import Directions from "@/components/Directions";
import Earn from "@/components/Earn";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Membership from "@/components/Membership";
import Memberships from "@/components/Memberships";
import Features from "../Features";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <HeroSection />
      <ComingSoon />
      <Features />
      <Memberships />
      <Directions />
      <Footer />
    </div>
  );
};

export default HomePage;
