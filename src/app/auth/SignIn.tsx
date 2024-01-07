"use client";
import Field from "@/components/forms/partials/field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SignInUser, SigninSchema } from "@/types/SignInUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const SignIn = (props: Props) => {
  const redirect = useRouter();
  const { data, status } = useSession();
  console.log(data);
  console.log(status);
  const form = useForm<SignInUser>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  if (status === "authenticated") {
    redirect.push("/UserAccount");
  }

  const { handleSubmit, control, setValue } = form;

  const onSubmit = (data: SignInUser) => {
    signIn("credentials", { email: data.email, password: data.password });
  };

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
        </div>
        <Button className="w-full mt-4">Sign In</Button>
      </form>
    </Form>
  );
};

export default SignIn;
