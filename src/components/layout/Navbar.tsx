"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { User2 } from "lucide-react";
import { navLinks } from "@/data/navLinks";

type Props = {};

const Navbar = (props: Props) => {
  const path = usePathname();

  const isHomePath =
    path === "/" ? "absolute left-0 right-0 px-8  lg:px-10" : "";

  return (
    <div
      className={cn(
        "hidden md:flex items-center justify-between w-full px-12 py-10 max-w-[1510px] mx-auto  ",
        isHomePath
      )}
    >
      <div className="flex gap-12 items-center">
        <Link href={"/"}>
          <Image
            src={"/icon-logo-white.svg"}
            alt="logo"
            width={200}
            height={100}
          />
        </Link>
        <div className="flex gap-8">
          {navLinks.map((link, index) => {
            return (
              <Link href={link.path} key={`link-${index}`}>
                <p className="text-theme-white font-semibold border-2 border-transparent px-2 py-1 rounded-xl hover:border-white transition-all duration-300">
                  {link.display}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <Link href="/auth">
        <div className="bg-white p-1 rounded-xl flex items-center justify-center">
          <User2 size={40} />
        </div>
        <p className="text-white text-center mt-2 font-semibold">Sign in</p>
      </Link>
    </div>
  );
};

export default Navbar;
