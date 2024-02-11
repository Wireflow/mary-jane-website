import updatePersonalInfo from "@/use-cases/frontend/user/updatePersonalInfo";
import showToast, { ShowToastOptions } from "./showToast";
import { CustomResponse } from "@/services/requestHandler";
import { any } from "zod";

type HandleAsyncWithToast<T = any> = {
  operation: () => Promise<CustomResponse<T>>;
  onSuccess?: () => void;
  onFail?: () => void;
  setErrorMessage?: () => void;
  toastOptions?: {
    error?: ShowToastOptions;
    success?: ShowToastOptions;
  };
};

export default async function handleAsyncOperation<T = any>(
  options: HandleAsyncWithToast<T>
) {
  try {
    const { operation, onFail, onSuccess, toastOptions, setErrorMessage } =
      options;

    const result = await operation();

    if (result?.ok) {
      onSuccess && onSuccess();

      return showToast({
        message: toastOptions?.success?.message
          ? toastOptions?.success?.message
          : "Success!",
        variant: "success",
      });
    }

    if (!result?.ok) {
      onFail && onFail();
      return showToast({
        message: result.error?.message
          ? result.error?.message
          : "Could not complete operation",
        variant: "error",
        setFormError: setErrorMessage && setErrorMessage,
      });
    }
  } catch (error) {
    showToast({
      message: `Client error`,
      variant: "error",
    });
  }
}
