"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {};

const MobileNavbar = (props: Props) => {
  const path = usePathname();

  const isHomePath = path === "/" ? "top-[5rem]" : "bg-black";

  return (
    <div className={cn("absolute flex md:hidden justify-between w-full  items-center px-6 py-3", isHomePath)}>
      <Link href={"/"}>
        <Image
          src={"/icon-logo-white.svg"}
          alt="logo"
          className="ml-3"
          width={200}
          height={100}
        />
      </Link>
      <Sheet>
        <SheetTrigger className={cn(" top-10 right-24", isHomePath)}>
          <Menu className="text-white" size={40} />
        </SheetTrigger>
        <SheetContent>
          <Link href={"/"}>
            <Image
              src={"/icon-logo-black.svg"}
              alt="logo"
              className="ml-3"
              width={200}
              height={100}
            />
          </Link>
          <div className="mt-6 flex flex-col gap-6">
            {navLinks.map((link, index) => {
              return (
                <Link href={link.path} key={`link-${index}`}>
                  <p className="text-theme-black font-semibold border-2 border-transparent px-2 py-1 rounded-xl hover:border-black transition-all duration-300">
                    {link.display}
                  </p>
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
