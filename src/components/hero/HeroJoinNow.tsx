import React, { useState } from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {};

const HeroJoinNow = (props: Props) => {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center shadow-2xl"
    >
      <Input
        className="bg-white py-5 rounded-r-none rounded-l-xl"
        placeholder="ex. johndoe@mail.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Link
        href={{
          pathname: "/auth",
          query: { type: "register", email },
        }}
      >
        <Button className="w-fit px-6 rounded-l-none rounded-r-xl">
          Join Now
        </Button>
      </Link>
    </form>
  );
};

export default HeroJoinNow;
