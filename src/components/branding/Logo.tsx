import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/icon-logo-black.svg"}
        alt="logo"
        width={250}
        height={300}
        className="hidden md:block"
      />
    </Link>
  );
};

export default Logo;
