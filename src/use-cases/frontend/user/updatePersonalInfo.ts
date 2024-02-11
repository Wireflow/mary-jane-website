import requestHandler, { axiosInstance } from "@/services/requestHandler";
import { Account } from "@/types/Account";
import { User } from "@prisma/client";

export default async function updatePersonalInfo(data: Account) {
  const updatedUser = await requestHandler<User>(() =>
    axiosInstance.put("/api/user", data)
  );
  return updatedUser;
}
