import Link from "next/link";
import React from "react";

import Image from "next/image";
import Section from "./ui/section";
import { Button } from "./ui/button";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Section size="sm">
      <div className="flex flex-col gap-5">
        <div className="border-b pb-5 border-black flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <Image
              className="-ml-2 mb-2  w-[300px]"
              alt="Logo"
              src={"/FooterLogo.svg"}
              width={300}
              height={40}
            />
            <h2 className="md:text-3xl text-2xl font-semibold">NYC LOCATION</h2>
            <p className="font-medium md:text-2xl text-lg">
              657 Meeker Avenue Brooklyn, NY 11222
            </p>
          </div>
          <div className="flex justify-between  md:flex-row flex-col gap-5">
            <div className="flex gap-5">
              <Link className="text-md font-semibold" href={"/"}>
                Home
              </Link>
              <Link className="text-md font-semibold" href={"/"}>
                Memberships
              </Link>
              <Link className="text-md font-semibold" href={"/"}>
                Location
              </Link>
            </div>
            <div className="flex gap-3 md:items-center sm:flex-nowrap md:flex-row flex-col ">
              <input
                className="border p-2 rounded-lg"
                placeholder="Enter your email"
              />
              <Button className="bg-theme-purple p-5 ">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-wrap gap-2">
          <p className="text-sm font-medium">
            © 2024 Mary Jane. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link className="text-sm font-medium" href={"/"}>
              Terms
            </Link>
            <Link className="text-sm font-medium" href={"/"}>
              Privacy
            </Link>
            <Link className="text-sm font-medium" href={"/"}>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;