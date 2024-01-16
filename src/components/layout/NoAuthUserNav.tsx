import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = {
  isHomePath: boolean;
};

const NoAuthUserNav = (props: Props) => {
  return (
    <div
      className={cn({
        "bg-theme-purple px-2 py-2 rounded-full": props.isHomePath,
      })}
    >
      <Link
        href={{
          pathname: "/auth",
          query: { type: "signin" },
        }}
      >
        <Button variant={"outline"} className="font-semibold rounded-full">
          Login
        </Button>
      </Link>
      <Link
        href={{
          pathname: "/auth",
          query: { type: "register" },
        }}
        className="ml-2 lg:inline-block hidden"
      >
        <Button className="font-semibold rounded-full">Sign Up</Button>
      </Link>
    </div>
  );
};

export default NoAuthUserNav;
