import requestHandler, { axiosInstance } from "@/services/requestHandler";
import { ChangePassword } from "@/types/ResetPassword";

export default async function changePassword(data: ChangePassword) {
  const isUserUpdated = await requestHandler<{ update: boolean }>(() =>
    axiosInstance.put("/api/user/change-password", data)
  );
  return isUserUpdated;
}
