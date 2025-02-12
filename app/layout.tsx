import type { Metadata } from "next";
import { Geist, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

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
      <body
        className={` ${beVietnamPro.variable} antialiased max-w-[90%] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
