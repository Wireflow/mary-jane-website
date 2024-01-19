import requestHandler, { axiosInstance } from "@/services/requestHandler";
import { RegisterUser } from "@/types/RegisterUser";
import { SendEmailCode } from "@/types/ResetPassword";
import { User } from "@prisma/client";

export default async function sendUserVerificationCode(data: SendEmailCode) {
  const isCodeSent = await requestHandler<{ sent: boolean }>(() =>
    axiosInstance.post("/api/user/send-code", data)
  );
  return isCodeSent;
}
