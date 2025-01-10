import type { Metadata } from "next";
import { Quantico } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import VideoLoop from "@/app/components/VideoLoop";

const quantico = Quantico({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quantico.className}`}>
        <VideoLoop />
        <Header />
        {children}
      </body>
    </html>
  );
}
