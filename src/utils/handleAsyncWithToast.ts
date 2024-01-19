import { CustomResponse } from "@/services/requestHandler";
import { ShowToastOptions } from "./showToast";

type HandleAsyncWithToast<T> = {
  operation: () => Promise<CustomResponse<T>>;
  successMessage: string;
  customErrorMessage?: string;
  toastOptions?: {
    error?: ShowToastOptions;
    success?: ShowToastOptions;
  };
};

export default async function handleAsyncWithToast<T>(
  options: HandleAsyncWithToast<T>
) {
  const { operation } = options;

  try {
    const result = await operation();

    if (result.ok) {
    }
  } catch (error) {}
}
