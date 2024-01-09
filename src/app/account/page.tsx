import AccountPage from "@/components/pages/AccountPage";
import { authOptions } from "@/services/next-auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { db } from "../../../prisma";

type Props = {};

const Account = async (props: Props) => {
  const session = await getServerSession(authOptions);

  const user = await db.user.findFirst({
    where: { id: session?.user.id },
  });

  if (!session?.user) return redirect("/");

  return user && <AccountPage user={user} />;
};

export default Account;
