import React from "react";

type Props = {};

const UserMembership = (props: Props) => {
  return (
    <div className="border border-black p-5 md:h-40  h-[100px]  rounded-lg bg-theme-yellow ">
      <p className='text-xl font-medium'>Your <span className="text-theme-purple">Membership</span></p>
      <h2 className=" md:text-2xl sm:text-xl text-lg font-semibold mt-1">COMING SOON</h2>
    </div>
  );
};

export default UserMembership;
