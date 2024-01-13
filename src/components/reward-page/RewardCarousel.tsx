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
import { Key } from "lucide-react";

type Props = {};

const RewardCarousel = (props: Props) => {
  return (
    <Section>
      <Carousel className="xl:px-40 px-10">
        <CarouselContent>
          {RewardsData.map((reward, i) => {
            return (
              <>
                <CarouselItem>
                  <RewardCard
                    key={i}
                    name={reward.name}
                    image={reward.image}
                    points={reward.points}
                  />
                </CarouselItem>
              </>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="bg-black border-theme-purple " />
        <CarouselNext className="bg-black" />
      </Carousel>
    </Section>
  );
};

export default RewardCarousel;
