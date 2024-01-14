import authService from "@/services/authService";
import { db } from "../../../../prisma";
import { RegisterUser } from "@/types/RegisterUser";
import { NextResponse } from "next/server";
import { User } from "@prisma/client";
import { UseCaseReturn } from "@/types/UseCases";

const auth = authService();

export default async function addUser(
  user: RegisterUser
): Promise<UseCaseReturn<User>> {
  try {
    const { email, phone, name, password } = user;
    const hashedPassword = auth.encryptPassword(password);

    const existingUser = await db.user.findFirst({
      where: {
        email,
      },
    });

    if (existingUser)
      return { success: false, error: "User already exists", status: 409 };

    const newUser = await db.user.create({
      data: {
        email,
        phoneNumber: phone,
        name,
        password: hashedPassword,
      },
    });

    return { success: true, data: newUser };
  } catch (error) {
    const functionError = "addUser use-case error";
    console.error(functionError, "error:", error);
    return { success: false, error: functionError, status: 500 };
  }
}
