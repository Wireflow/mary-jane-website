import requestHandler, { axiosInstance } from "@/services/requestHandler";
import { Newsletter as NewsletterT } from "@/types/Newsletter";
import { Newsletter } from "@prisma/client";

export default async function subscribeNewsletter(data: NewsletterT) {
  const subscriber = await requestHandler<Newsletter>(() =>
    axiosInstance.post("/api/newsletter/subscribe", data)
  );

  return subscriber;
}
