"use client";

import SignIn from "@/components/forms/SignInForm";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

type PagesProps = {
  children: React.ReactNode;
};

const Pages = ({ children }: PagesProps) => {
  const pathname = usePathname();
  const isHomePath = pathname === "/";
  return <div className={cn({ "mt-16 md:mt-0": !isHomePath })}>{children}</div>;
};

export default Pages;
