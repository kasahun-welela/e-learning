import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "E-learning",
  description: "learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${beVietnamPro.variable} bg-muted `}>
        <div className="bg-primary py-1 text-center text-white text-sm flex justify-center gap-5">
          <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
          <i className="ri-arrow-right-long-line"></i>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
