"use client";

import { Newsletter, NewsletterSchema } from "@/types/Newsletter";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import Field from "./partials/field";
import { Button } from "../ui/button";

type Props = {};

const NewsletterForm = (props: Props) => {
  const form = useForm<Newsletter>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit, control, register } = form;

  const onSubmit = (data: Newsletter) => {
    console.log(data);
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
          className="bg-white rounded-md py-5 px-2 text-black"
          placeholder="Enter your email"
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </Form>
  );
};

export default NewsletterForm;
