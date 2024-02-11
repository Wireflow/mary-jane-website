import { z } from "zod";

export const AccountSchema = z.object({
  name: z.string(),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string(),
});

export type Account = z.infer<typeof AccountSchema>;
