import requestHandler, { axiosInstance } from "@/services/requestHandler";

export default async function fetchPoints() {
  const points = await requestHandler<{ points: number }>(() =>
    axiosInstance.get("/api/user/points")
  );
  return points;
}
