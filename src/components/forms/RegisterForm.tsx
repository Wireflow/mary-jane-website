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
import showToast from "@/utils/showToast";
import handleAsyncOperation from "@/utils/handleAsyncOperation";

type Props = {
  email?: string;
};

const RegisterForm = (props: Props) => {
  const [registerError, setRegisterError] = useState<string | undefined>(
    undefined
  );
  const form = useForm<RegisterUser>({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      name: "",
      email: props.email ? props.email : "",
      phone: undefined,
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: RegisterUser) => {
    setRegisterError(undefined);
    await handleAsyncOperation({
      operation: () => registerUser(data),
      onSuccess: () => {
        signIn("credentials", {
          email: data.email,
          password: data.password,
        });
        reset();
      },
      toastOptions: {
        success: { message: "Registered user successfully" },
        error: {
          message: "Unable to register user. Try again!",
          setFormError: setRegisterError,
        },
      },
    });
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
          {registerError && <p className="text-red-500">{registerError}</p>}
        </div>
        <Button className="w-full mt-4" disabled={isSubmitting}>
          {isSubmitting ? "Getting you started..." : "Register"}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
