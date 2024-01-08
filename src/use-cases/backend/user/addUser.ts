import authService from "@/services/authService";
import { db } from "../../../components/prisma";
import { RegisterUser } from "@/types/RegisterUser";

const auth = authService();

export default async function addUser(user: RegisterUser) {
  try {
    const { email, phone, name, password } = user;
    const hashedPassword = auth.encryptPassword(password);

    const newUser = db.user.create({
      data: {
        email,
        phoneNumber: phone,
        name,
        password: hashedPassword,
      },
    });

    return newUser;
  } catch (error) {
    const functionError = "addUser use-case error";
    console.error(functionError, "error:", error);
  }
}
