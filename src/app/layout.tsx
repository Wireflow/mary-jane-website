import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NewsBanner from "@/components/layout/NewsBanner";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";
import MobileNavbar from "@/components/layout/MobileNavbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/services/next-auth";
import Providers from "@/components/layout/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mary Jane Social Club",
  description: "Earn Points. Redeem Rewards.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={cn(poppins.className, "max-w-[1920px] mx-auto")}>
        <Providers session={session}>
          <NewsBanner
            text="Sign up now and get rewards."
            newsText="MaryJane VIP Coming Soon"
          />
          <Navbar />
          <MobileNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
