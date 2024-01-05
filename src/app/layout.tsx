import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NewsBanner from "@/components/layout/NewsBanner";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";
import MobileNavbar from "@/components/layout/MobileNavbar";

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
  return (
    <html lang="en">
      <body className={cn(poppins.className, "max-w-[1920px] mx-auto")}>
        <NewsBanner
          text="Sign up now and get rewards."
          newsText="MaryJane VIP Coming Soon"
        />
        <Navbar />
        <MobileNavbar />
        {children}
      </body>
    </html>
  );
}
