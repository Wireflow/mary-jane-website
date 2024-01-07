import { RegisterUserSchema } from "@/types/RegisterUser";
import addUser from "@/use-cases/user/addUser";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export default async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { name, phone, password, email } = RegisterUserSchema.parse(body);

    const user = await addUser({ password, email, phone, name });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: "Zod Error Registering User!", error: error },
        { status: 415 }
      );
    }

    return NextResponse.json(
      { message: "Error Registering User!", error: error },
      { status: 400 }
    );
  }
}
