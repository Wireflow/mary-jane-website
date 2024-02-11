import authService from "@/services/authService";
import { db } from "../../../../prisma";
import { RegisterUser } from "@/types/RegisterUser";
import { NextResponse } from "next/server";
import { Prisma, User } from "@prisma/client";
import { UseCaseReturn } from "@/types/UseCases";
import { Account } from "@/types/Account";

interface AccountWithId extends Account {
  id: string;
}

export default async function updateUser(
  user: AccountWithId
): Promise<UseCaseReturn<User>> {
  try {
    const { email, phoneNumber, name, id } = user;

    const newUser = await db.user.update({
      where: {
        id,
      },
      data: {
        email,
        phoneNumber,
        name,
      },
    });

    return { success: true, data: newUser };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return { success: false, error: "User does not exist", status: 404 };
      }
    }

    const functionError = "updateUser use-case error";
    console.error(functionError, "error:", error);
    return { success: false, error: functionError, status: 500 };
  }
}
