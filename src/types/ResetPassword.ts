import { z } from "zod";

export const SendEmailCodeSchema = z.object({
  email: z.string().email("Invalid email"),
});

export type SendEmailCode = z.infer<typeof SendEmailCodeSchema>;

// --------------------------------------

export const VerifyCodeSchema = z.object({
  code: z.string().max(6),
});

export type VerifyCode = z.infer<typeof VerifyCodeSchema>;

// --------------------------------------

export const NewPasswordSchema = z.object({
  newPassword: z.string().min(8),
  verifyPassword: z.string().min(8),
});

export type NewPassword = z.infer<typeof NewPasswordSchema>;
