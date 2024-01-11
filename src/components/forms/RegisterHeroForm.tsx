"use client";

import { RegisterUser, RegisterUserSchema } from "@/types/RegisterUser";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import Field from "./partials/field";
import Link from "next/link";
import { Button } from "../ui/button";
import { RegisterErrors } from "@/app/auth/Register";
import registerUser from "@/use-cases/frontend/user/registerUser";
import { signIn } from "next-auth/react";

type Props = {};

const RegisterHeroForm = (props: Props) => {
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

  const { handleSubmit, control, setValue, reset } = form;

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
        className="bg-theme-white px-6 py-4 rounded-xl shadow-xl md:max-w-[550px] w-full"
      >
        <div className="grid gap-2">
          <p className="font-bold text-theme-purple">Quick Sign Up</p>
          <h3 className="text-2xl">Get Started Now!</h3>
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
        <div className="grid md:grid-cols-2 gap-6 mt-6">
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
          />
          {error ? <p className="text-red-500 col-span-2">{error}</p> : null}
        </div>
        <Button className="w-full mt-4">Register</Button>
      </form>
    </Form>
  );
};

export default RegisterHeroForm;
