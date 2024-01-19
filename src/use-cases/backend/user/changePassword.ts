import authService from "@/services/authService";
import { db } from "../../../../prisma";
import { RegisterUser } from "@/types/RegisterUser";
import { NextResponse } from "next/server";
import { User } from "@prisma/client";
import { UseCaseReturn } from "@/types/UseCases";
import { ChangePassword } from "@/types/ResetPassword";

const auth = authService();

export default async function changeUserPassword(
  data: ChangePassword
): Promise<UseCaseReturn<User>> {
  try {
    const { email, newPassword, verifyPassword } = data;

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
