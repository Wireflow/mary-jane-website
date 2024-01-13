"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MobileAddressBar from "./MobileAddressBar";
import UserNavbar from "../auth/UserNavbar";

type Props = {};

const MobileNavbar = (props: Props) => {
  const path = usePathname();
  const [activeLink, setActiveLink] = useState<String | null>(null);

  const handleSetActiveLink = (linkPath: string) => {
    setActiveLink(linkPath);
  };

  const isHomePath = path === "/" ? "top-[5rem]" : "bg-black";

  return (
    <div
      className={cn(
        "absolute flex md:hidden justify-between w-full  items-center px-6 py-3",
        isHomePath
      )}
    >
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
        <SheetContent className="p-0 flex flex-col justify-between h-full overflow-hidden">
          <div className="p-6">
            <Link href={"/"}>
              <Image
                src={"/icon-logo-black.svg"}
                alt="logo"
                className="ml-3"
                width={200}
                height={100}
              />
            </Link>
            <div className="mt-6 flex flex-col gap-6 ml-2">
              {navLinks.map((link, index) => {
                const isActive = path === link.path;
                return (
                  <>
                    <SheetClose asChild>
                      <Link href={link.path} key={`link-${index}`}>
                        <p
                          onClick={() => handleSetActiveLink(link.path)}
                          className={cn(
                            `text-theme-black font-semibold border-2 border-transparent py-1  hover:border-b-black w-fit transition-all duration-300`,
                            isActive ? "border-b-black" : "border-transparent"
                          )}
                        >
                          {link.display}
                        </p>
                      </Link>
                    </SheetClose>
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="px-10">
              <UserNavbar />
            </div>
            <MobileAddressBar />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
