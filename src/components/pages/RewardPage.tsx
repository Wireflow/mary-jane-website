import React from "react";
import RewardHero from "../reward-page/RewardHero";
import RewardCarousel from "../reward-page/RewardCarousel";

type Props = {};

const RewardPage = (props: Props) => {
  return (
    <div>
      <RewardHero />
      {/* <RewardCarousel /> */}
    </div>
  );
};

export default RewardPage;
