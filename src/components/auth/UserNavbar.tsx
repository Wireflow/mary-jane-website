"use client";

import { Gift, LogOut, Settings, User2 } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import fetchPoints from "@/use-cases/frontend/user/points/fetchPoints";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

type Props = {};

const UserNavbar = (props: Props) => {
  const [points, setPoints] = useState<number | 0 | undefined>(0);
  const { data: session } = useSession();
  const name = session?.user?.name;
  const initials = name
    ?.split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pointsData = await fetchPoints();
        setPoints(pointsData.data?.points);
      } catch (error) {
        console.error("Error fetching points:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-between md:w-fit w-full gap-2">
        <div className="flex gap-5 items-center">
          <Avatar className="w-[50px] h-[50px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <h2 className="text-white text-xl font-semibold md:hidden block capitalize">
            {name}
          </h2>
        </div>
        <h2 className="md:hidden block mr-2 p-1 font-medium rounded-xl bg-theme-yellow text-black">
          {points} <span>Points</span>
        </h2>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 md:block hidden">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-theme-purple/20" />
        <Link href={"/account"}>
          <DropdownMenuItem className="font-medium pr-8 cursor-pointer hover:bg-theme-purple/60 hover:text-theme-white">
            <User2 className="w-5 h-5 mr-2" />
            Account
          </DropdownMenuItem>
        </Link>
        <Link href={"/rewards"}>
          <DropdownMenuItem className="font-medium pr-8 cursor-pointer hover:bg-theme-purple/60 hover:text-theme-white">
            <Gift className="w-5 h-5 mr-2" />
            My Rewards
          </DropdownMenuItem>
        </Link>
        <Link href={"/account/settings"}>
          <DropdownMenuItem className="font-medium pr-8 cursor-pointer hover:bg-theme-purple/60 hover:text-theme-white">
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator className="bg-theme-purple/20" />
        <DropdownMenuItem
          className="font-medium pr-8 cursor-pointer hover:bg-red-500 hover:text-theme-white"
          onClick={async () =>
            await signOut({ redirect: true, callbackUrl: "/" })
          }
        >
          <LogOut className="w-5 h-5 mr-2" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNavbar;
