"use client";

import { Account, AccountSchema } from "@/types/Account";
import updatePersonalInfo from "@/use-cases/frontend/user/updatePersonalInfo";
import showToast from "@/utils/showToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import Field from "./partials/field";
import handleAsyncOperation from "@/utils/handleAsyncOperation";

type Props = {};

const UserDetailsForm = (props: Props) => {
  const { data: session, update } = useSession();

  const form = useForm<Account>({
    resolver: zodResolver(AccountSchema),
    defaultValues: {
      email: session?.user.email ? session?.user.email : "",
      name: session?.user.name ? session?.user.name : "",
      phoneNumber: session?.user.phone ? session?.user.phone : "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: Account) => {
    await handleAsyncOperation({
      operation: () => updatePersonalInfo(data),
      onSuccess: () => {
        update({
          name: data.name,
          email: data.email,
          phone: data.phoneNumber,
        });
      },
      toastOptions: {
        success: { message: "Saved Changes!" },
        error: { message: "Failed to update user!" },
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mt-8 mb-4">Personal Details</h3>
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8">
          <Field
            name="name"
            label="Name"
            control={control}
            placeholder="Your name"
          />
          <Field
            name="email"
            label="Email"
            control={control}
            placeholder="Your email"
          />
          <Field
            name="phoneNumber"
            label="Phone Number"
            control={control}
            placeholder="Your phone number"
          />
        </div>

        <Button
          type="submit"
          variant={"secondary"}
          disabled={isSubmitting}
          className="mt-6"
        >
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </Form>
  );
};

export default UserDetailsForm;
