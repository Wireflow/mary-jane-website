import React, { HTMLAttributes } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";

export interface MembershipCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  price: number;
  unit?: "monthly" | "yearly";
  bestoffer?: boolean;
  bulletpoints: string[];
  buttonStyle?: "outline" | "default";
  callToAction?: string;
}

const MembershipCard = ({
  buttonStyle = "outline",
  bestoffer = false,
  unit = "monthly",
  callToAction = "Get Started",
  ...props
}: MembershipCardProps) => {
  const features = props.bulletpoints.slice(0, 5);

  return (
    <Card
      {...props}
      className={cn(
        "shadow-2xl shadow-purple-100 p-4 max-w-[400px] md:max-w-[400px] relative overflow-hidden z-30",
        { "text-theme-black": buttonStyle === "default" },
        props.className
      )}
    >
      <CardHeader>
        <p className="font-bold text-xs text-theme-purple">Membership</p>
        <CardTitle className="text-3xl font-medium flex gap-2 items-center">
          {props.title}
          {bestoffer ? (
            <div
              className={cn(
                "bg-theme-yellow rounded-sm w-fit px-2 py-1 text-xs text-theme-black"
              )}
            >
              Best Offer
            </div>
          ) : null}
        </CardTitle>

        <CardDescription className={cn("text-gray-800")}>
          {props.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-2">
          <h3 className="text-4xl font-semibold">${props.price}</h3>
          <p className="mb-1.5 text-gray-700 text-sm">
            per {unit == "monthly" ? "month" : "year"}
          </p>
        </div>
        <span
          className={cn(
            "block h-[1.5px] w-full bg-gray-300 mt-4 rounded-full",
            {
              "bg-theme-black": buttonStyle == "default",
            }
          )}
        />
        <ul className="mt-4">
          {features.map((bullet, index) => {
            return (
              <li
                key={`membership-bullet-${index}`}
                className={cn("flex gap-2 items-center py-2")}
              >
                <CheckCircle className="w-5 h-5" />
                {bullet}
              </li>
            );
          })}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={cn(
            "w-full",
            buttonStyle == "outline"
              ? "text-black border-black border hover:bg-theme-purple bg-white hover:text-theme-white hover:border-theme-purple"
              : ""
          )}
          variant={buttonStyle}
        >
          {callToAction}
        </Button>
      </CardFooter>

      {buttonStyle == "default" && (
        <>
          <div className="absolute h-[550px] w-[550px] bg-theme-purple/5 bottom-40 right-10 -z-10 rounded-full border-2 border-theme-purple/10" />
          <div className="absolute h-[300px] w-[300px] bg-theme-purple/10 -bottom-10 -right-10 -z-10 rounded-full border-2 border-theme-purple/10" />
        </>
      )}
      {buttonStyle == "outline" && (
        <>
          <div className="absolute h-[500px] w-[500px] bg-theme-purple/10 bottom-60 left-20 -z-10 rounded-full border-2 border-theme-purple/10" />
          <div className="absolute h-[300px] w-[300px] bg-theme-purple/10 -bottom-40 -left-14 -z-10 rounded-full border-2 border-theme-purple/10" />
        </>
      )}
    </Card>
  );
};

export default MembershipCard;
