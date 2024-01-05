import React from "react";

type Props = {};

const EarnPointsBadget = (props: Props) => {
  return (
    <div className="flex items-center">
      <div className="bg-theme-white rounded-l-xl p-2">
        <p className="font-bold whitespace-nowrap">
          <span className=" font-light">EARN</span> POINTS
        </p>
      </div>
      <div className="bg-theme-yellow rounded-r-xl p-2">
        <p className="font-bold whitespace-nowrap">
          <span className="font-light">REDEEM</span> REWARDS
        </p>
      </div>
    </div>
  );
};

export default EarnPointsBadget;
