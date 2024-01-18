import emailService from "@/services/emailService";
import { UseCaseReturn } from "@/types/UseCases";
import generateVerificationCode from "@/utils/generateEmailCode";
import { VerificationCode } from "@prisma/client";
import { db } from "../../../../../prisma";

type VerifyCode = { code: number; email: string };

export default async function verifyCode(
  data: VerifyCode
): Promise<UseCaseReturn<VerificationCode>> {
  try {
    const { email, code } = data;

    const existingUser = await db.user.findFirst({
      where: {
        email,
      },
    });

    if (!existingUser)
      return { success: false, error: "User does not exist", status: 404 };

    const existingCode = await db.verificationCode.findFirst({
      where: {
        code: Number(code),
        userId: existingUser.id,
      },
    });

    if (!existingCode)
      return { success: false, error: "Incorrect code", status: 401 };

    const currentTimestamp = new Date();
    const expirationTimestamp = existingCode.expiration;
    const isCodeExpired = currentTimestamp > expirationTimestamp;

    if (isCodeExpired) {
      return { success: false, error: "Code Expired", status: 401 };
    }

    const updatedVerificationCode = await db.verificationCode.update({
      where: {
        id: existingCode.id,
      },
      data: {
        verified: true,
      },
    });

    return { success: true, data: updatedVerificationCode };
  } catch (error) {
    const functionError = "sendVerificationCode use-case error";
    console.error(functionError, "error:", error);
    return { success: false, error: functionError, status: 500 };
  }
}
