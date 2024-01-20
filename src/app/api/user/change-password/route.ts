import { ChangePasswordSchema } from "@/types/ResetPassword";
import changeUserPassword from "@/use-cases/backend/user/changeUserPassword";
import { NextResponse } from "next/server";

export async function PUT(req: Request, res: Response) {
  try {
    const body = await req.json();
    const data = ChangePasswordSchema.parse(body);

    const updatedUser = await changeUserPassword(data);

    if (!updatedUser.success)
      return NextResponse.json(
        { message: updatedUser?.error },
        { status: updatedUser?.status }
      );

    if (updatedUser.success)
      return NextResponse.json(
        { updated: updatedUser.success },
        { status: 200 }
      );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error Changing Password", error: error },
      { status: 500 }
    );
  }
}
