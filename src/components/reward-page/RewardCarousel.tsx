"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Section from "../ui/section";
import RewardCard from "../User-Components/RewardCard";
import { RewardsData } from "@/data/RewardsData";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";

type Props = {};

const RewardCarousel = (props: Props) => {
  return (
    <Section size="sm">
      <div className="flex md:flex-col items-start md:gap-10">
        <ToggleGroup
          type="multiple"
          className=" flex lg:flex-row  items-center w-fit flex-col  gap-2 bg-gray-200 text-theme-purple  rounded-xl py-2 px-3"
        >
               <Image
        className="rounded-xl "
        src={'/icon-logo-black.svg'}
        alt="papers"
        width={100}
        height={700}
      />
          <ToggleGroupItem value="Bongs">Bongs</ToggleGroupItem>
          <ToggleGroupItem value="Pre-rolls">Pre-rolls</ToggleGroupItem>
          <ToggleGroupItem value="Papers">Papers</ToggleGroupItem>
          <ToggleGroupItem value="Herbs">Herbs</ToggleGroupItem>
          <ToggleGroupItem value="Grinders">Grinders</ToggleGroupItem>
          <ToggleGroupItem value="Bowels">Bowels</ToggleGroupItem>
          <ToggleGroupItem value="Accessories">Accessories</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </Section>
  );
};

export default RewardCarousel;
