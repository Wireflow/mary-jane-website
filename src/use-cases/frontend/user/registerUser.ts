import requestHandler, { axiosInstance } from "@/services/requestHandler";
import { RegisterUser } from "@/types/RegisterUser";
import { User } from "@prisma/client";

export default async function registerUser(user: RegisterUser) {
  const newUser = await requestHandler<User>(() =>
    axiosInstance.post("/api/auth/register", user)
  );
  return newUser;
}
