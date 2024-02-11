"use client";

import { VerifyCode, VerifyCodeSchema } from "@/types/ResetPassword";
import sendUserVerificationCode from "@/use-cases/frontend/verification-code/sendUserVerificationCode";
import showToast from "@/utils/showToast";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormDescription, FormField, FormItem } from "../ui/form";
import InputCode from "../ui/input-code";
import verifyEmailCode from "@/use-cases/frontend/verification-code/verifyEmailCode";
import { set } from "zod";
import handleAsyncOperation from "@/utils/handleAsyncOperation";

type Props = {
  email?: string;
  setIsEmailSent: (isSent: boolean) => void;
  setVerified: (isVerified: boolean) => void;
};

const VerifyEmailCodeForm = ({ email, setIsEmailSent, setVerified }: Props) => {
  const form = useForm<VerifyCode>({
    resolver: zodResolver(VerifyCodeSchema),
    defaultValues: {
      code: "",
    },
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { isSubmitting, isSubmitSuccessful },
  } = form;

  const onSubmit = async (data: VerifyCode) => {
    if (email) {
      setVerified(false);
      await handleAsyncOperation({
        operation: () => verifyEmailCode({ ...data, email }),
        onSuccess: () => setVerified(true),
        toastOptions: {
          success: { message: "Code verified!" },
          error: { message: "Could verify user code, please try again!" },
        },
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
            Enter your code
          </p>
        </div>
        <div className="grid gap-1 mt-4 md:max-w-[500px] w-full">
          <FormField
            control={control}
            name="code"
            render={({ field }) => {
              return (
                <FormItem>
                  <InputCode
                    length={6}
                    label="Code"
                    onChange={(code) => field.onChange(code)}
                  />
                  <FormDescription>
                    Be ware, your code expires in{" "}
                    <span className="text-theme-purple font-bold">1 hour</span>
                  </FormDescription>
                </FormItem>
              );
            }}
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <Button
            variant={"secondary"}
            onClick={() => setIsEmailSent(false)}
            type="button"
          >
            Go Back
          </Button>
          <Button className="w-fit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Verifying..." : "Verify Code"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default VerifyEmailCodeForm;
