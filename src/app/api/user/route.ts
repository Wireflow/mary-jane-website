import getServerAuth from "@/services/next-auth/getServerAuth";
import { AccountSchema } from "@/types/Account";
import { RegisterUserSchema } from "@/types/RegisterUser";
import addUser from "@/use-cases/backend/user/addUser";
import updateUser from "@/use-cases/backend/user/updateUser";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function PUT(req: Request, res: Response) {
  try {
    const { session } = await getServerAuth();

    if (!session?.user) {
      return NextResponse.json(
        { message: "Unauthorized Request" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { name, phoneNumber, email } = AccountSchema.parse(body);

    const user = await updateUser({
      email,
      phoneNumber,
      name,
      id: session.user.id,
    });

    if (!user.success) {
      return NextResponse.json(
        { message: user?.error },
        { status: user?.status }
      );
    }

    if (user.success) {
      return NextResponse.json({ ...user?.data }, { status: 200 });
    }
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: "Zod Error Updating User!", error: error },
        { status: 415 }
      );
    }
    console.log(error);
    return NextResponse.json(
      { message: "Error Updating User!", error: error },
      { status: 400 }
    );
  }
}
