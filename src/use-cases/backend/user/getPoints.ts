import { UseCaseReturn } from "@/types/UseCases";
import { db } from "../../../../prisma";

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
