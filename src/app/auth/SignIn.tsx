"use client";
import Field from "@/components/forms/partials/field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { RegisterUser, RegisterUserSchema } from "@/types/RegisterUser";
import { SignInUser, SigninSchema } from "@/types/SignInUser";
import { zodResolver } from "@hookform/resolvers/zod";
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
      <div className=" flex flex-col gap-5">
        <p className="font-bold text-theme-purple text-lg">Sign In</p>
        <h2 className="font-medium text-4xl">Welcome Back!</h2>
        <p className="text-md">
          Don&apos;t have an account?{" "}
          <span className="text-theme-purple border-b border-theme-purple ">
            Register
          </span>{" "}
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:w-[470px] ">
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
            placeholder="enter password"
          />
        </div>
        <Button className="w-full">Sign In</Button>
      </form>
    </Form>
  );
};

export default SignIn;
