import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";

type LargeMembershipCardProps = {
  plan: string;
  description: string;
  price: string;
  unit?: "monthly" | "yearly";
  features: string[];
};

const LargeMembershipCard = ({
  unit = "monthly",
  ...props
}: LargeMembershipCardProps) => {
  return (
    <Card className="flex-1 lg:min-w-[500px]">
      <CardHeader className="flex md:flex-row gap-4 flex-col-reverse justify-between min-w-0">
        <div>
          <CardTitle className="text-2xl md:text-3xl">
            {props.plan} Plan
          </CardTitle>
          <CardDescription className="max-w-[300px]">
            {props.description}
          </CardDescription>
        </div>
        <div className="flex items-center gap-1.5">
          <p className="text-5xl font-semibold">{props.price}</p>
          <p className="mt-1 text-gray-500 text-sm whitespace-nowrap">
            per {unit === "monthly" ? "month" : "year"}
          </p>
        </div>
      </CardHeader>
      <span className="block h-[1px] w-full bg-theme-purple/20" />
      <CardContent className="mt-6">
        <h3 className="font-semibold">Features</h3>
        <p className="text-gray-500 text-sm">
          Everything in our <span className="lowercase">{props.plan}</span>...
        </p>
        <ul className="grid md:grid-cols-2 gap-2 gap-x-6 mt-4">
          {props.features?.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="w-7 h-7 text-theme-purple mr-2" />{" "}
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <span className="block h-[1px] w-full bg-theme-purple/20" />
      <CardFooter className="mt-6">
        <Button className="w-full">Get Started</Button>
      </CardFooter>
    </Card>
  );
};

export default LargeMembershipCard;
