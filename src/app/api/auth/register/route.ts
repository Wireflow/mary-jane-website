import { RegisterUserSchema } from "@/types/RegisterUser";
import addUser from "@/use-cases/backend/user/addUser";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { name, phone, password, email } = RegisterUserSchema.parse(body);

    const user = await addUser({ password, email, phone, name });

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
        { message: "Zod Error Registering User!", error: error },
        { status: 415 }
      );
    }
    console.log(error);
    return NextResponse.json(
      { message: "Error Registering User!", error: error },
      { status: 400 }
    );
  }
}
