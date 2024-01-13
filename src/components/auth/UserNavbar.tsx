import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import SignOut from "./SignOut";
import { signOut } from "next-auth/react";

type Props = {};

const UserNavbar = (props: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <Link href={"/account"}>
        <Button variant={"secondary"} className="rounded-full px-3 lg:inline-block hidden">
          <User className="w-6 h-6 " />
        </Button>
      </Link>
      <Button
        className="rounded-full ml-3 px-3 "
        variant={"destructive"}
        onClick={async () =>
          await signOut({ redirect: true, callbackUrl: "/" })
        }
      >
        <LogOut className="w-6 h-6 " />
      </Button>
    </div>
  );
};

export default UserNavbar;
