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
import { Toaster } from "sonner";
import getPathname from "@/utils/getPathname";
import Pages from "@/components/layout/Pages";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mary Jane Social Club",
  description: "Earn Points. Redeem Rewards.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={cn(
          poppins.className,
          "max-w-[1920px] mx-auto overflow-x-hidden"
        )}
      >
        <Providers session={session}>
          <NewsBanner
            text="Sign up now and get rewards."
            newsText="MaryJane VIP Coming Soon"
          />
          <Navbar />
          <MobileNavbar />
          <Pages>{children}</Pages>
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
