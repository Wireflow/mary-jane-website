import { db } from "../../../prisma";
import { RegisterUser } from "@/types/RegisterUser";

export default async function addUser(user: RegisterUser) {
  try {
    const { email, phone, name, password } = user;

    const newUser = db.user.create({
      data: {
        email,
        phoneNumber: phone,
        name,
        password,
      },
    });

    return newUser;
  } catch (error) {
    const functionError = "addUser use-case error";
    console.error(functionError, "error:", error);
  }
}
