import { Dispatch, SetStateAction } from "react";
import { ExternalToast, toast } from "sonner";

const toastVariantStyles = {
  default: { color: "black" },
  black: { color: "white", backgroundColor: "black", border: "none" },
  error: { background: "#ed5858", color: "white" },
  success: { background: "green", color: "white" },
};

type ShowToastOptions = {
  message: string;
  options?: ExternalToast;
  variant?: keyof typeof toastVariantStyles;
  setFormError?: Dispatch<SetStateAction<string | undefined>>;
};

export default function showToast(data: ShowToastOptions) {
  const { message, options, variant = "default", setFormError } = data;

  setFormError?.(message);

  return toast(message, {
    ...options,
    style: { ...toastVariantStyles[variant] },
  });
}
