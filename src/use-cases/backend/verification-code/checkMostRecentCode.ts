import emailService from "@/services/emailService";
import { UseCaseReturn } from "@/types/UseCases";
import generateVerificationCode from "@/utils/generateEmailCode";
import { User, VerificationCode } from "@prisma/client";
import { db } from "../../../../prisma";

type CheckMostRecentCode = { email: string };

export default async function checkMostRecentCode(
  data: CheckMostRecentCode
): Promise<UseCaseReturn<VerificationCode>> {
  try {
    const { email } = data;

    const mostRecentCode = await db.user.findFirst({
      where: {
        email,
      },
      include: {
        verificationCodes: {
          orderBy: {
            createdAt: "desc",
          },
          select: {
            verified: true,
          },
          take: 1,
        },
      },
    });

    if (!mostRecentCode)
      return {
        success: false,
        error: "User has not verified a code",
        status: 401,
      };

    if (!mostRecentCode.verificationCodes[0].verified) {
      return {
        success: false,
        error: "User has not verified the code",
        status: 401,
      };
    }

    if (mostRecentCode.verificationCodes[0].verified) {
      return { success: true, status: 200 };
    }

    return { success: false, error: "Something went wrong" };
  } catch (error) {
    const functionError = "checkMostRecentCode use-case error";
    console.error(functionError, "error:", error);
    return { success: false, error: functionError, status: 500 };
  }
}
