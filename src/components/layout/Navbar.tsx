"use client";

import { navLinks } from "@/data/navLinks";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import UserNavbar from "../auth/UserNavbar";
import { Button } from "../ui/button";
import NavLink from "./partials/NavLink";
import NoAuthUserNav from "./NoAuthUserNav";

type Props = {};

const Navbar = (props: Props) => {
  const path = usePathname();
  const { status } = useSession();
  const isHomePath = path === "/";
  const authenticated = status === "authenticated";
  const unauthenticated = status === "unauthenticated";

  return (
    <div
      className={cn(
        "hidden md:flex items-center w-full px-12 py-6 max-w-[1510px] mx-auto",
        {
          "bg-black max-w-[1920px] py-6 justify-between": !isHomePath,
          "absolute left-0 right-0  gap-10  px-8 py-12 lg:px-10 z-20":
            isHomePath,
          "justify-between": unauthenticated && isHomePath,
        }
      )}
    >
      <div className="flex gap-12 items-center">
        <Link href={"/"} passHref>
          <Image
            src={"/icon-logo-white.svg"}
            alt="logo"
            width={200}
            height={100}
          />
        </Link>
        <div className="flex gap-8">
          {navLinks.map((link, index) => (
            <NavLink
              path={link.path}
              key={index}
              displayText={link.display}
              isActive={path === link.path}
            />
          ))}
        </div>
      </div>
      {authenticated ? (
        <UserNavbar />
      ) : (
        <NoAuthUserNav isHomePath={isHomePath} />
      )}
    </div>
  );
};

export default Navbar;
