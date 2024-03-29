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
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";

type Props = {};

const MobileNavbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  const authenticated = status === "authenticated";
  const path = usePathname();

  const isHomePath = path === "/" ? "top-[5rem] " : "bg-black";

  return (
    <div
      className={cn(
        "absolute flex md:hidden justify-between w-full  items-center px-6 py-3 z-20",
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
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className={cn(" top-10 right-24", isHomePath)}>
          <Menu className="text-white" size={40} />
        </SheetTrigger>
        <SheetContent className="p-0 w-full flex flex-col justify-between h-full overflow-hidden">
          <div className="p-6">
            <Link href={"/"} onClick={() => setOpen(false)}>
              <Image
                src={"/icon-logo-black.svg"}
                alt="logo"
                className="ml-3"
                width={200}
                height={100}
              />
            </Link>
            {authenticated && (
              <div className="rounded-2xl bg-theme-purple px-2 py-3 mt-5">
                <UserNavbar />
              </div>
            )}
            <div className="mt-6 flex flex-col gap-6 ml-2">
              {navLinks.map((link, index) => {
                const isActive = path === link.path;
                const Protected = link.protected && !session?.user;

                if (!Protected)
                  return (
                    <>
                      <SheetClose asChild key={`link-${index}`}>
                        <Link href={link.path}>
                          <p
                            className={cn(
                              `text-theme-black font-semibold border-2 border-transparent py-1 hover:border-b-black w-fit transition-all duration-300`,
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
            {authenticated ? (
              <Button
                className="mx-6"
                variant={"destructive"}
                onClick={async () =>
                  await signOut({ redirect: true, callbackUrl: "/" })
                }
              >
                Log out
              </Button>
            ) : (
              <div className="flex gap-2 mx-6">
                <Link
                  href={{
                    pathname: "/auth",
                    query: { type: "signin" },
                  }}
                  className="flex-1"
                  onClick={() => setOpen(false)}
                >
                  <Button className="w-full">Sign in</Button>
                </Link>
                <Link
                  href={{
                    pathname: "/auth",
                    query: { type: "register" },
                  }}
                  className="flex-1"
                  onClick={() => setOpen(false)}
                >
                  <Button
                    variant={"outline"}
                    className="border-2 w-full border-theme-purple text-theme-purple font-bold"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            )}
            <MobileAddressBar />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
