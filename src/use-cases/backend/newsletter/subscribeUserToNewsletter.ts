import authService from "@/services/authService";
import { db } from "../../../../prisma";
import { RegisterUser } from "@/types/RegisterUser";
import { NextResponse } from "next/server";
import { Newsletter, Prisma, User } from "@prisma/client";
import { UseCaseReturn } from "@/types/UseCases";
import { Newsletter as NewsletterT } from "@/types/Newsletter";

export default async function subscribeUserToNewsletter(
  data: NewsletterT
): Promise<UseCaseReturn<Newsletter>> {
  try {
    const { email } = data;

    const subscriber = await db.newsletter.create({
      data: {
        email,
      },
    });

    return { success: true, data: subscriber };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (error.code === "P2002") {
        return {
          success: false,
          error: "User already subscribed!",
          status: 409,
        };
      }
    }

    const functionError = "subscribeUserToNewsletter use-case error";
    console.error(functionError, "error:", error);
    return { success: false, error: functionError, status: 500 };
  }
}
