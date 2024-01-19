import { authOptions } from "@/services/next-auth";
import getPoints from "@/use-cases/backend/user/getPoints";
import sendVerificationCode from "@/use-cases/backend/verification-code/sendVerificationCode";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const { email } = await req.json();
    const code = await sendVerificationCode(email);

    if (!code.success) {
      return NextResponse.json(
        { message: code?.error },
        { status: code?.status }
      );
    }

    if (code.success) {
      return NextResponse.json({ sent: true }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error Sending User Email!", error: error },
      { status: 500 }
    );
  }
}
