"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "../ui/sonner";
import NewsBanner from "./NewsBanner";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Pages from "./Pages";
import Footer from "./Footer";

type LayoutProvider = {
  children: React.ReactNode;
};

export const LayoutProvider = ({ children }: LayoutProvider) => {
  const pathname = usePathname();
  const changeLayout = pathname !== "/auth" && pathname !== "/password/reset";

  return changeLayout ? (
    <>
      <NewsBanner
        text="Sign up now and get rewards."
        newsText="MaryJane VIP Coming Soon"
      />
      <Navbar />
      <MobileNavbar />
      <Pages>{children}</Pages>
      <Toaster />
      <Footer />
    </>
  ) : (
    <>
      <MobileNavbar />
      {children}
      <Toaster />
    </>
  );
};
