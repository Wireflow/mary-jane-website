"use client";

import { NewPassword, NewPasswordSchema } from "@/types/ResetPassword";
import showToast from "@/utils/showToast";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import Field from "./partials/field";
import changePassword from "@/use-cases/frontend/user/changePassword";
import { useRouter } from "next/navigation";

type Props = {
  email: string;
};

const ResetPasswordForm = ({ email }: Props) => {
  const router = useRouter();
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
    setError,
    formState: { isSubmitting, isSubmitSuccessful },
  } = form;

  const onSubmit = async (data: NewPassword) => {
    try {
      if (getValues("newPassword") !== getValues("verifyPassword")) {
        setError("verifyPassword", { message: "Passwords do not match" });
      }

      const updatedUser = await changePassword({ ...data, email });

      if (!updatedUser.ok) {
        showToast({
          message: updatedUser.error?.message || "Code not verified or expired",
          variant: "error",
        });
      }

      if (updatedUser.ok) {
        showToast({
          message: `Password successfully reset`,
          variant: "success",
        });

        router.replace("/auth?type=signin");
      }
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
            type="password"
            placeholder="Enter new password"
          />

          <Field
            name="verifyPassword"
            control={control}
            label="Verify New Password"
            type="password"
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
