import AccountPage from "@/pages/AccountPage";
import { authOptions } from "@/services/next-auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { db } from "../../components/prisma";

type Props = {};

const Account = async (props: Props) => {
  const session = await getServerSession(authOptions);

  if (!session?.user) return redirect("/");

  return <AccountPage />;
};

export default Account;
