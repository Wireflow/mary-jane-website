"use client";

import React from "react";
import Section from "../ui/section";
import Image from "next/image";
import { useSession } from "next-auth/react";

type Props = {};

const RewardHero = (props: Props) => {
  const { data: session, status } = useSession();
  return <Section className="relative md:mt-0 mt-[67px]" size="sm"></Section>;
};

export default RewardHero;
