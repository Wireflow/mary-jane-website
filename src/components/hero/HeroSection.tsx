"use client";

import { ArrowUp } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import EarnPointsBadget from "./EarnPointsBadget";
import HeroJoinNow from "./HeroJoinNow";
import Circle from "../ui/circle";
import Section from "../ui/section";
import HeroCircles from "./HeroCircles";
import { Button } from "../ui/button";

type Props = {};

const HeroSection = (props: Props) => {
  const { data: session, status } = useSession();
  const userName = session?.user?.name;
  const capitalizedUserName = userName
    ? userName.charAt(0).toUpperCase() + userName.slice(1)
    : null;

  const authenticated = status === "authenticated";
  const unauthenticated = status === "unauthenticated";

  return (
    <Section background="purple" className="relative z-10 overflow-hidden">
      <div className="mt-20 md:mt-16 flex md:flex-row flex-col gap-10 items-start md:items-center justify-between">
        <div className="flex flex-col gap-4 z-10">
          <EarnPointsBadget />
          <h1 className="text-theme-white sm:text-7xl text-3xl md:text-4xl lg:text-4xl xl:text-7xl font-bold ">
            MARY JANE <br className="md:block hidden" /> SOCIAL CLUB
          </h1>
          <p className="font-semibold text-theme-yellow max-w-[500px]">
            Where every purchase takes you closer to exclusive rewards! Join the
            movement – Inhale the Benefits!
          </p>
          {authenticated ? (
            <Link href="/account" className="w-full">
              <Button variant={"secondary"} className="w-full">
                My Account
              </Button>
            </Link>
          ) : (
            <HeroJoinNow />
          )}
        </div>
        {authenticated ? (
          <div className="bg-white hidden md:w-[600px] w-full  rounded-xl p-5">
            <div className="flex justify-between">
              <h2 className=" text-xl font-bold leading-[2rem] relative">
                <span className="font-normal">Welcome back,</span> <br />
                {capitalizedUserName}
              </h2>
              <Link
                className="flex flex-col text-[12px] items-center font-medium"
                passHref
                href={"/account"}
              >
                <ArrowUp
                  className="text-black w-12 h-12 rotate-45"
                  strokeWidth={1.2}
                />
                Account
              </Link>
            </div>
          </div>
        ) : null}
        <div className="rotate-[50deg] -mt-20 ml-20 md:-rotate-12 md:-mt-[20rem] -mb-20 md:mb-0 md:ml-0 -mr-40">
          <div className="relative">
            <Image
              src={"/img-cbd-jar.png"}
              width={650}
              height={500}
              alt="jar z-20"
              priority
            />
            <div className="bg-theme-white/20 rounded-full w-[70%] h-[70%] absolute -bottom-10 right-[37%] blur-3xl -z-10" />
          </div>
        </div>
      </div>
      <HeroCircles />
      <div className="h-full w-full  md:w-[75vw] lg:w-[70vw] xl:w-[60vw] bg-theme-black/20 absolute top-0 left-0 md:-left-[14rem] md:-skew-x-[20deg] z-0 blur-[2px]" />
    </Section>
  );
};

export default HeroSection;
