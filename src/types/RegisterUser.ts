import z from "zod";
import axios from "@/services/requestHandler";

export const RegisterUserSchema = z.object({
  name: z
    .string({ required_error: "Your name is required!" })
    .min(1, "Your name is required!"),

  email: z
    .string({ required_error: "Your email is required!" })
    .email("Please use a valid email!"),

  phone: z.string({ required_error: "Your phone number is required!" }).max(10),

  password: z
    .string({ required_error: "Please use a strong password!" })
    .min(8, "Password minimum is 8 characters"),
});

export type RegisterUser = z.infer<typeof RegisterUserSchema>;
