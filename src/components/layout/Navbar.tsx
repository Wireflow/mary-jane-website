"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LogOut, User2 } from "lucide-react";
import { navLinks } from "@/data/navLinks";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";

type Props = {};

const Navbar = (props: Props) => {
  const path = usePathname();

  const { data, status } = useSession();

  const isHomePath = path === "/";

  const isHomePathNavStyle = isHomePath
    ? "absolute left-0 right-0 px-8 py-10 lg:px-10"
    : "bg-black max-w-[1920px] py-2 ";
  return (
    <div
      className={cn(
        "hidden md:flex items-center justify-between w-full px-12 py-6 max-w-[1510px] mx-auto",
        isHomePathNavStyle
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
                <p
                  className={cn(
                    "font-semibold border-2 border-transparent px-2 py-1 rounded-xl hover:border-white transition-all duration-300",
                    isHomePath ? "text-theme-white" : "text-theme-white"
                  )}
                >
                  {link.display}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      {status === "authenticated" ? (
        <div>
          <Button
            onClick={() => signOut()}
            className="text-white rounded-full my-2"
          >
            <LogOut />
          </Button>
        </div>
      ) : (
        <Link
          href="/auth"
          className="flex lg:flex-row flex-col lg:gap-2 items-center"
        >
          {/* <div className="bg-white p-1 rounded-full flex items-center justify-center">
            <User2 size={30} />
          </div>
          <p
            className={cn(
              " text-center mt-2 font-semibold lg:block hidden",
              isHomePath ? "text-theme-white" : "text-theme-white"
            )}
          >Sign In</p> */}
          <Button variant={"outline"} className="font-semibold">
            Login
          </Button>
          <Button className="font-semibold">Sign Up</Button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
