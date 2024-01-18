import AccountPage from "@/components/pages/AccountPage";
import { authOptions } from "@/services/next-auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { db } from "../../../prisma";
import protectServerPage from "@/services/next-auth/protectServerPage";

type Props = {};

const Account = async (props: Props) => {
  const { session } = await protectServerPage({
    redirectTo: "/auth?type=signin",
  });

  const user = await db.user.findFirst({
    where: { id: session?.user.id },
  });

  return user && <AccountPage user={user} />;
};

export default Account;
