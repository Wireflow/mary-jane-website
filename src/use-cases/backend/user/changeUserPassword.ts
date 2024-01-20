import authService from "@/services/authService";
import { ChangePassword } from "@/types/ResetPassword";
import { UseCaseReturn } from "@/types/UseCases";
import { User } from "@prisma/client";
import { db } from "../../../../prisma";

const auth = authService();

export default async function changeUserPassword(
  data: ChangePassword
): Promise<UseCaseReturn<User>> {
  try {
    const { email, newPassword, verifyPassword } = data;

    const currentDate = new Date();

    const mostRecentCode = await db.user.findFirst({
      where: {
        email,
      },
      include: {
        verificationCodes: {
          orderBy: {
            createdAt: "desc",
          },
          where: {
            expiration: {
              gte: currentDate,
            },
          },
          select: {
            verified: true,
          },
          take: 1,
        },
      },
    });

    if (!mostRecentCode || !mostRecentCode?.verificationCodes[0]?.verified)
      return {
        success: false,
        error: "User has not verified a code",
        status: 401,
      };

    if (newPassword !== verifyPassword) {
      return {
        success: false,
        error: "User passwords do not match",
        status: 422, // Semantic error like password mismatch
      };
    }

    const hashedPassword = auth.encryptPassword(newPassword);

    const updatedUserPassword = await db.user.update({
      where: {
        email,
      },
      data: {
        password: hashedPassword,
      },
    });

    if (!updatedUserPassword)
      return { success: false, error: "User does not exists", status: 404 };

    return { success: true, data: updatedUserPassword };
  } catch (error) {
    const functionError = "changeUserPassword use-case error";
    console.error(functionError, "error:", error);
    return { success: false, error: functionError, status: 500 };
  }
}
