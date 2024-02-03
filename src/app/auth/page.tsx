import AuthPage from "@/components/pages/AuthPage";
import getServerAuth from "@/services/next-auth/getServerAuth";
import { redirect } from "next/navigation";

type Props = {};

const AuthenticationPage = async (props: Props) => {
  const { authenticated } = await getServerAuth();

  if (authenticated) return redirect("/account");

  return <AuthPage />;
};

export default AuthenticationPage;
