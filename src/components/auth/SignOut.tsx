import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";

type Props = {
  className?: string;
};

const SignOut = ({ className }: Props) => {
  return (
    <Button
      onClick={() => signOut()}
      className={cn("font-bold my-2", className)}
      variant={"destructive"}
    >
      Sign Out
      <LogOut className="w-4 h-4 ml-1" />
    </Button>
  );
};

export default SignOut;
