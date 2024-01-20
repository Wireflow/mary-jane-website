import authService from "@/services/authService";
import { RegisterUser } from "@/types/RegisterUser";
import { UseCaseReturn } from "@/types/UseCases";
import { User, VerificationCode } from "@prisma/client";
import { db } from "../../../../prisma";
import generateVerificationCode from "@/utils/generateEmailCode";
import emailService from "@/services/emailService";

type Email = string;

export default async function sendVerificationCode(
  email: Email
): Promise<UseCaseReturn<VerificationCode>> {
  try {
    const existingUser = await db.user.findFirst({
      where: {
        email,
      },
    });

    if (!existingUser)
      return { success: false, error: "User does not exist", status: 404 };

    const { code, expiration } = generateVerificationCode();

    const newVerificationCode = await db.verificationCode.create({
      data: {
        userId: existingUser.id,
        code,
        expiration,
      },
    });

    await emailService.send({
      from: "maryjanesocialclubnyc@wireflow.us",
      to: existingUser.email,
      subject: `Mary Jane - Password Reset: ${newVerificationCode.code}`,
      html: `<p>You have request to change your password, here's your code: ${newVerificationCode.code} </p>`,
    });

    return { success: true, data: newVerificationCode };
  } catch (error) {
    const functionError = "sendVerificationCode use-case error";
    console.error(functionError, "error:", error);
    return { success: false, error: functionError, status: 500 };
  }
}
