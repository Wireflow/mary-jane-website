"use client";

import { SendEmailCode, SendEmailCodeSchema } from "@/types/ResetPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import Field from "./partials/field";
import sendUserVerificationCode from "@/use-cases/frontend/verification-code/sendUserVerificationCode";
import showToast from "@/utils/showToast";
import { Check } from "lucide-react";
import { useState } from "react";

type Props = {
  isEmailSent: boolean;
  setIsEmailSent: (isSent: boolean) => void;
  setEmail: (email: string) => void;
};

const SendEmailCodeForm = ({
  isEmailSent,
  setIsEmailSent,
  setEmail,
}: Props) => {
  const form = useForm<SendEmailCode>({
    resolver: zodResolver(SendEmailCodeSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful },
  } = form;

  const onSubmit = async (data: SendEmailCode) => {
    try {
      setIsEmailSent(false);
      const isCodeSent = await sendUserVerificationCode({ email: data.email });

      if (isCodeSent.error?.status === 409) {
        showToast({
          message: "User does not exist exists",
          variant: "error",
        });
      }

      if (isCodeSent.error?.status === 404) {
        showToast({
          message: "User does not exist exists",
          variant: "error",
        });
      }

      if (isCodeSent.ok) {
        setIsEmailSent(true);
        setEmail(data.email);
        showToast({
          message: `Code sent to ${data.email}`,
          variant: "success",
        });
      }
    } catch (error) {
      showToast({
        message: "Could not send user code, please try again!",
        variant: "error",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:mt-0 mt-24 mx-6 w-full md:w-fit"
      >
        <div className="grid gap-2">
          <Link
            href={{
              pathname: "/auth",
              query: { type: "signin" },
            }}
          >
            <Image
              src={"/icon-logo-black.svg"}
              width={200}
              height={100}
              alt="logo"
              className="mb-2 hidden md:block"
            />
          </Link>
          <p className="font-semibold text-theme-purple text-2xl md:text-4xl">
            Reset your password
          </p>
        </div>
        <div className="grid gap-1 mt-4 md:max-w-[500px] w-full">
          <Field
            className=""
            name="email"
            control={control}
            label="Email"
            placeholder="example@gmail.com"
            description="Enter your email to recieve a verification code."
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <Link
            href={{
              pathname: "/auth",
              query: { type: "signin" },
            }}
          >
            <Button variant={"secondary"}>Go Back</Button>
          </Link>
          <Button
            className="w-fit"
            type="submit"
            disabled={isSubmitting || isEmailSent}
          >
            {isSubmitting ? (
              "Sending code..."
            ) : isEmailSent ? (
              <>
                Code Sent <Check className="text-theme-white w-5 h-5 ml-2" />
              </>
            ) : (
              "Send code"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SendEmailCodeForm;
