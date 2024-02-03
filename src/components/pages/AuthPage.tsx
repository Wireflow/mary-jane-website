"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SignInForm from "../../app/auth/SignInForm";
import Image from "next/image";
import RegisterForm from "@/app/auth/RegisterForm";
import { ChevronLeft } from "lucide-react";

type Props = {};

const AuthPage = (props: Props) => {
  const search = useSearchParams();
  const type = search.get("type");
  const email = search.get("email");
  const isRegisterQuery = type === "register";

  return (
    <div className="min-h-screen flex md:justify-center md:items-center px-6">
      <div className="flex flex-col gap-10 sm:justify-start mt-24 md:mt-0 md:items-center w-full">
        <Image
          src={"/icon-logo-black.svg"}
          alt="logo"
          width={250}
          height={300}
          className="hidden md:block"
        />
        <div className="mx-auto w-full max-w-[500px] md:bg-white md:shadow-theme-purple/15 md:shadow-[0px_0px_75px_10px] md:p-16 rounded-2xl">
          <Link href={"/"}>
            <div className="-ml-2 mb-4 flex gap-1 text-theme-purple">
              <ChevronLeft className="w-5 h-5" />
              <p className="font-medium text-sm">Back to Home</p>
            </div>
          </Link>
          {isRegisterQuery ? (
            <RegisterForm email={email || ""} />
          ) : (
            <SignInForm />
          )}
        </div>
        <p>
          {isRegisterQuery ? "Already with" : "New to"} Mary Jane?{" "}
          <Link
            href={{
              pathname: "/auth",
              query: { type: isRegisterQuery ? "signin" : "register" },
            }}
            className="text-theme-purple font-semibold"
          >
            {isRegisterQuery ? "Sign In" : "Register Now"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
