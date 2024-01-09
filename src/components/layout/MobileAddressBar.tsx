import { cn } from "@/lib/utils";
import { Phone, Pin } from "lucide-react";
import React from "react";

type Props = {
  className?: string;
};

const MobileAddressBar = ({ className }: Props) => {
  return (
    <div className="items-center md:flex py-4 bg-theme-yellow -ml-1">
      <div
        className={cn(
          `bg-yellow h-full w-full flex items-center justify-center gap-4 px-8`,
          className
        )}
      >
        <div className="bg-black rounded-full p-4">
          <Pin className="w-5 h-5" fill="#FFD278" stroke="#FFD278" />
        </div>
        <div>
          <p className="font-medium">Come visit us at:</p>
          <p>123 Street Avenue</p>
          <p>Brooklyn, New York 104293</p>
        </div>
      </div>
    </div>
  );
};

export default MobileAddressBar;
