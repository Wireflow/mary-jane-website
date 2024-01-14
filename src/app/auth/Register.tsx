"use client";

import { RegisterUser, RegisterUserSchema } from "@/types/RegisterUser";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Field from "@/components/forms/partials/field";
import registerUser from "@/use-cases/frontend/user/registerUser";
import { signIn } from "next-auth/react";

type Props = {};

export type RegisterErrors = "Unable to register user. Try again!" | null;

const Register = (props: Props) => {
  const [error, setError] = useState<RegisterErrors>(null);
  const form = useForm<RegisterUser>({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: undefined,
      password: "",
    },
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = async (data: RegisterUser) => {
    try {
      setError(null);
      const newUser = await registerUser(data);

      await signIn("credentials", {
        email: data.email,
        password: data.password,
      });

      reset();
    } catch (error) {
      setError("Unable to register user. Try again!");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:max-w-[500px] w-full"
      >
        <div className="grid gap-2">
          <p className="font-bold text-theme-purple">Register</p>
          <h3 className="text-2xl">Create an Account</h3>
          <p>
            Already have an account?{" "}
            <Link
              href={"/auth"}
              className="underline text-theme-purple font-semibold"
            >
              Sign In
            </Link>
          </p>
        </div>
        <div className="grid gap-1 mt-4">
          <Field
            name="name"
            control={control}
            label="Your Name"
            placeholder="John Doe"
          />
          <Field
            name="email"
            control={control}
            label="Email"
            placeholder="example@gmail.com"
          />
          <Field
            name="phone"
            control={control}
            label="Phone Number"
            type="number"
            maxLength={10}
            placeholder="(123) 456-7890"
          />
          <Field
            name="password"
            type="password"
            control={control}
            label="Password"
            placeholder="Enter password"
          />
          {error ? <p className="text-red-500 text-sm">{error}</p> : null}
        </div>
        <Button className="w-full mt-4">Register</Button>
      </form>
    </Form>
  );
};

export default Register;
