import authService from "@/services/authService";
import { db } from "../../../../../prisma";
import { RegisterUser } from "@/types/RegisterUser";
import { NextResponse } from "next/server";
import { User } from "@prisma/client";
import { UseCaseReturn } from "@/types/UseCases";

export default async function getPoints(
  userId: string
): Promise<UseCaseReturn<number>> {
  try {
    const user = await db.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user)
      return { success: false, error: "User doesn't exist", status: 404 };

    return { success: true, data: user.points };
  } catch (error) {
    const functionError = "getPoints use-case error";
    console.error(functionError, "error:", error);
    return { success: false, error: functionError, status: 500 };
  }
}
