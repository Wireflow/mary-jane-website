import axios, { AxiosError, AxiosResponse, AxiosInstance } from "axios";

const baseURL = process.env.HOST;

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

interface ApiError {
  message: string;
}

export default async function requestHandler<T>(
  requestFunction: () => Promise<AxiosResponse<T>>
): Promise<T> {
  try {
    const response = await requestFunction();
    return response.data;
  } catch (error) {
    console.error("Request error:", error);

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiResponse<unknown>>;
      if (axiosError.response?.data.message) {
        throw new Error(axiosError.response.data.message);
      }
      throw new Error("An unexpected API error occurred");
    }

    throw new Error("An unexpected error occurred");
  }
}

export { axiosInstance };
