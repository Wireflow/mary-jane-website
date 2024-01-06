import { z } from "zod";

export const SigninSchema = z.object({
  email: z.string().email("Invalid email").optional(),
  phoneNumber: z.string().optional(),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have at least 8 characters"),
});

export type SignInUser = z.infer<typeof SigninSchema>;
