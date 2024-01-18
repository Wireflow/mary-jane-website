"use client";

import {
  NewPassword,
  NewPasswordSchema,
  VerifyCode,
  VerifyCodeSchema,
} from "@/types/ResetPassword";
import sendUserVerificationCode from "@/use-cases/frontend/user/send-code/sendUserVerificationCode";
import showToast from "@/utils/handleToast";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormDescription, FormField, FormItem } from "../ui/form";
import InputCode from "../ui/input-code";
import verifyEmailCode from "@/use-cases/frontend/user/verify-code/verifyEmailCode";
import { set } from "zod";
import Field from "./partials/field";

type Props = {};

const ResetPasswordForm = (props: Props) => {
  const form = useForm<NewPassword>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      newPassword: "",
      verifyPassword: "",
    },
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { isSubmitting, isSubmitSuccessful },
  } = form;

  const onSubmit = async (data: NewPassword) => {
    try {
      console.log(data);
    } catch (error) {
      showToast({
        message: "Could update password, please try again later!",
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
            Enter your new password!
          </p>
        </div>
        <div className="grid gap-1 mt-4 md:max-w-[500px] w-full">
          <Field
            name="newPassword"
            control={control}
            label="New Password"
            placeholder="Enter new password"
          />

          <Field
            name="verifyPassword"
            control={control}
            label="Verify New Password"
            placeholder="Enter password again"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <Button className="w-fit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Changing..." : "Change Password"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
