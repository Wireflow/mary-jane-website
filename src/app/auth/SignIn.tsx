"use client";
import Field from "@/components/forms/partials/field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SignInUser, SigninSchema } from "@/types/SignInUser";
import showToast from "@/utils/handleToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Props = {};

type SignInErrors =
  | "Incorrect email or password"
  | "Couldn't sign in user"
  | undefined;

const SignIn = (props: Props) => {
  const router = useRouter();
  const [signInError, setSignInError] = useState<string | undefined>(undefined);
  const { data: session, status } = useSession();
  const form = useForm<SignInUser>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const {
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: SignInUser) => {
    try {
      setSignInError(undefined);
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.ok) {
        return showToast({
          message: "Signed in sucessfully",
          variant: "black",
        });
      }

      if (result?.status === 401) {
        return showToast({
          message: `Invalid email or password`,
          variant: "error",
          setFormError: setSignInError,
        });
      }

      if (!result?.ok) {
        return showToast({
          message: `Couldn't sign in with ${data.email}`,
          variant: "error",
          setFormError: setSignInError,
        });
      }
    } catch (error) {
      showToast({
        message: `Couldn't sign in with ${data.email}`,
        variant: "error",
        setFormError: setSignInError,
      });
    }
  };

  if (status === "authenticated") return router.push("/account");

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <p className="font-bold text-theme-purple">Sign In</p>
          <h3 className="text-2xl">Welcome Back!</h3>
          <p>
            Don&apos;t have an account?{" "}
            <Link
              href={"/auth"}
              className="underline text-theme-purple font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
        <div className="grid gap-1 mt-4 md:max-w-[500px] w-full">
          <Field
            className=""
            name="email"
            control={control}
            label="Email"
            placeholder="example@gmail.com"
          />
          <Field
            name="password"
            type="password"
            control={control}
            label="Password"
            placeholder="Enter password"
          />
          {signInError && <p className="text-red-500 text-sm">{signInError}</p>}
        </div>
        <p className="flex gap-1 mt-2 text-sm text-gray-600">
          Forgot password?
          <Link
            href={"/password/reset"}
            className="text-theme-purple/80 underline underline-offset-4 cursor-pointer hover:text-theme-purple "
          >
            Reset
          </Link>
        </p>
        <Button className="w-full mt-4" disabled={isSubmitting}>
          {isSubmitting ? "Signing in..." : "Sign In"}
        </Button>
      </form>
    </Form>
  );
};

export default SignIn;
