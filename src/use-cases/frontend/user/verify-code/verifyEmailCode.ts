import requestHandler, { axiosInstance } from "@/services/requestHandler";
import { RegisterUser } from "@/types/RegisterUser";
import { SendEmailCode } from "@/types/ResetPassword";
import { User } from "@prisma/client";

type VerifyCodeReturn = {
  verified: boolean;
};

type VerifyCode = {
  email: string;
  code: string;
};

export default async function verifyEmailCode(data: VerifyCode) {
  const isCodeVerified = await requestHandler<VerifyCodeReturn>(() =>
    axiosInstance.put("/api/user/verify-code", data)
  );
  return isCodeVerified;
}
