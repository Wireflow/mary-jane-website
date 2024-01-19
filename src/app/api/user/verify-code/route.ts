import sendVerificationCode from "@/use-cases/backend/verification-code/sendVerificationCode";
import verifyCode from "@/use-cases/backend/verification-code/verifyCode";
import { NextResponse } from "next/server";

export async function PUT(req: Request, res: Response) {
  try {
    const { code, email } = await req.json();
    const verifiedCode = await verifyCode({ email, code });

    if (!verifiedCode.success)
      return NextResponse.json(
        { message: verifiedCode?.error },
        { status: verifiedCode?.status }
      );

    if (verifiedCode.success)
      return NextResponse.json(
        { verified: verifiedCode.data?.verified },
        { status: 200 }
      );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error Verifying Code!", error: error },
      { status: 500 }
    );
  }
}
