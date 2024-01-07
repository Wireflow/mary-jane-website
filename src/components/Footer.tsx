import Link from "next/link";
import React from "react";

import Image from "next/image";
import Section from "./ui/section";
import { Button } from "./ui/button";
import NewsletterForm from "./forms/NewsletterForm";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Section className="bg-black text-white" >
      <div className="flex flex-col gap-5">
        <div className="border-b pb-5 border-gray-200 flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <Image
              className="-ml-[1px] mb-2  md:w-[300px] w-[200px]"
              alt="Logo"
              src={"/icon-logo-white.svg"}
              width={300}
              height={40}
            />
            <h2 className="md:text-2xl text-lg font-semibold">NYC LOCATION</h2>
            <p className="font-medium md:text-lg text-sm">
              657 Meeker Avenue Brooklyn, NY 11222
            </p>
          </div>
          <div className="flex justify-between  md:flex-row flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-5">
              <Link className="sm:text-md text-sm font-semibold" href={"/"}>
                Home
              </Link>
              <Link className="sm:text-md text-sm font-semibold" href={"/"}>
                Memberships
              </Link>
              <Link className="sm:text-md text-sm font-semibold" href={"/"}>
                Location
              </Link>
            </div>
            <NewsletterForm />
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
