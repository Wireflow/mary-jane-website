import { authOptions } from "@/services/next-auth";
import getServerAuth from "@/services/next-auth/getServerAuth";
import { NewsletterSchema } from "@/types/Newsletter";
import subscribeUserToNewsletter from "@/use-cases/backend/newsletter/subscribeUserToNewsletter";
import getPoints from "@/use-cases/backend/user/getPoints";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function GET(req: Request, res: Response) {
  try {
    const { session } = await getServerAuth();

    if (!session?.user) {
      return NextResponse.json(
        { message: "Unauthorized Request" },
        { status: 401 }
      );
    }

    const points = await getPoints(session.user.id);

    if (!points.success) {
      return NextResponse.json(
        { message: points?.error },
        { status: points?.status }
      );
    }

    if (points.success) {
      return NextResponse.json({ points: points?.data }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error Getting User Points!", error: error },
      { status: 500 }
    );
  }
}
