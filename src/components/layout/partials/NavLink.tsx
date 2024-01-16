import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type NavLinkProps = {
  path: string;
  displayText: string;
  isActive: boolean;
  key: string | number;
};

const NavLink = (props: NavLinkProps) => {
  return (
    <Link href={props.path} key={`link-${props.key}`}>
      <p
        className={cn(
          "font-semibold border-2 border-transparent px-2 py-1 text-theme-white  hover:border-b-white transition-all duration-300",
          {
            "border-b-white": props.isActive,
            "border-transparent": !props.isActive,
          }
        )}
      >
        {props.displayText}
      </p>
    </Link>
  );
};

export default NavLink;
