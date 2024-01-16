import { headers } from "next/headers";

export default function getPathname(): string {
  const url = new URL(headers().get("referer") as string);
  return url.pathname;
}
