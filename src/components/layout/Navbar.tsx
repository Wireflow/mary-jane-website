"use client";

import { navLinks } from "@/data/navLinks";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import SignOut from "../auth/SignOut";
import UserNavbar from "../auth/UserNavbar";

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
        <UserNavbar />
      ) : (
        <div>
          <Link href="/auth">
            <Button variant={"outline"} className="font-semibold rounded-full">
              Login
            </Button>
          </Link>
          <Link href="/auth" className="ml-2 lg:inline-block hidden">
            <Button className="font-semibold rounded-full">Sign Up</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
