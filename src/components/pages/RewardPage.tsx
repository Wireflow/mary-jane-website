import React from "react";
import RewardHero from "../reward-page/RewardHero";
import RewardCarousel from "../reward-page/RewardCarousel";
import PageBanner from "../ui/page-banner";

type Props = {};

const RewardPage = (props: Props) => {
  return (
    <>
      <PageBanner
        title="Our Rewards"
        description="Shop with us and never miss out on rewarding moments with every
        purchase."
      />
      <RewardHero />
      {/* <RewardCarousel /> */}
    </>
  );
};

export default RewardPage;
