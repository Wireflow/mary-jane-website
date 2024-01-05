import z from "zod";

export const NewsletterSchema = z.object({
  email: z
    .string({ required_error: "Your email is required!" })
    .email("Please use a valid email!"),
});

export type Newsletter = z.infer<typeof NewsletterSchema>;
