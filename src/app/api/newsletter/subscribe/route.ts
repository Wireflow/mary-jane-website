import { NewsletterSchema } from "@/types/Newsletter";
import subscribeUserToNewsletter from "@/use-cases/backend/user/subscribeUserToNewsletter";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { email } = NewsletterSchema.parse(body);

    const subscriber = await subscribeUserToNewsletter({ email });

    if (!subscriber.success) {
      return NextResponse.json(
        { message: subscriber?.error },
        { status: subscriber?.status }
      );
    }

    if (subscriber.success) {
      return NextResponse.json({ ...subscriber?.data }, { status: 200 });
    }
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: "Zod Error Subscribing User!", error: error },
        { status: 415 }
      );
    }
    console.log(error);
    return NextResponse.json(
      { message: "Error Subscribing User!", error: error },
      { status: 500 }
    );
  }
}
