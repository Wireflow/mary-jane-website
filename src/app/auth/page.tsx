import Section from "@/components/ui/section";
import { getServerSession } from "next-auth";
import { authOptions } from "@/services/next-auth";
import { db } from "../../../prisma";
import { redirect } from "next/navigation";
import AuthPage from "@/components/pages/AuthPage";
import getServerAuth from "@/services/next-auth/getServerAuth";

type Props = {};

const AuthenticationPage = async (props: Props) => {
  const { authenticated } = await getServerAuth();

  if (authenticated) return redirect("/account");

  return <AuthPage />;
};

export default AuthenticationPage;
