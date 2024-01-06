"use client";
import Field from "@/components/forms/partials/field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SignInUser, SigninSchema } from "@/types/SignInUser";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const SignIn = (props: Props) => {
  const form = useForm<SignInUser>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const { handleSubmit, control, setValue } = form;

  const onSubmit = (data: SignInUser) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form  onSubmit={handleSubmit(onSubmit)}>
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
