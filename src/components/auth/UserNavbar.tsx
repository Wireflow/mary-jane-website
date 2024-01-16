"use client";

import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import SignOut from "./SignOut";
import { signOut, useSession } from "next-auth/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import fetchPoints from "@/use-cases/frontend/user/points/fetchPoints";

type Props = {};

const UserNavbar = (props: Props) => {
  const [points, setPoints] = useState<number | 0 | undefined>(0);
  const { data: session } = useSession();
  const userName = session?.user?.name;
  const capitalizedUserName = userName
    ? userName.charAt(0).toUpperCase() + userName.slice(1)
    : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pointsData = await fetchPoints();
        setPoints(pointsData.data?.points); // Assuming pointsData is the actual data you want to set
      } catch (error) {
        console.error("Error fetching points:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Popover>
      <PopoverTrigger className="flex items-center justify-between md:w-fit w-full gap-2">
        <div className="flex gap-5 items-center">
          <Avatar className="w-[50px] h-[50px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
          <h2 className="text-white text-xl font-semibold md:hidden block">
            {capitalizedUserName}
          </h2>
        </div>
        <h2 className="md:hidden block mr-2 p-1 font-medium rounded-xl bg-theme-yellow text-black">
          {points} <span>Points</span>
        </h2>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex gap-2 items-center">
          <Button
            className="rounded-full ml-3 px-3 "
            onClick={async () =>
              await signOut({ redirect: true, callbackUrl: "/" })
            }
          >
            <LogOut className="w-6 h-6 " />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserNavbar;
