"use client";

import { Newsletter, NewsletterSchema } from "@/types/Newsletter";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import Field from "./partials/field";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import showToast from "@/utils/showToast";
import subscribeNewsletter from "@/use-cases/frontend/newsletter/subcribeNewsletter";

type Props = {};

const NewsletterForm = (props: Props) => {
  const pathname = usePathname();
  const isHomePath = pathname === "/";

  const form = useForm<Newsletter>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: Newsletter) => {
    try {
      const result = await subscribeNewsletter(data);

      if (result?.ok) {
        return showToast({
          message: "Subscribed to newsletter!",
          variant: "black",
        });
      }

      if (result?.error?.status === 409) {
        return showToast({
          message: "User already subscribed!",
          variant: "error",
        });
      }

      if (!result?.ok) {
        return showToast({
          message: `Failed to subscribe user!`,
          variant: "error",
        });
      }
    } catch (error) {
      showToast({
        message: `Failed to subscribe user!`,
        variant: "error",
      });
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-3 md:items-center sm:flex-nowrap md:flex-row flex-col "
      >
        <Field
          name="email"
          control={control}
          className={cn("bg-white border-black  py-5 px-2 text-black", {
            "rounded-md": !isHomePath,
          })}
          placeholder="Enter your email"
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </Form>
  );
};

export default NewsletterForm;
