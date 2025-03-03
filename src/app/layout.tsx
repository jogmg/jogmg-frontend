import type { Metadata } from "next";
import { quantico } from "./fonts";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import VideoLoop from "@/app/components/VideoLoop";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";
import { SharedContextProvider } from "./SharedContext";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: "Jogmg - Joshua Attah's Portfolio",
    template: "%s | Jogmg",
  },
  description:
    "Joshua Attah's portfolio website. A software developer who builds solutions.",
  authors: { name: "Joshua Attah" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quantico.className}`}>
        <SharedContextProvider>
          <VideoLoop />
          <ToastContainer />
          <NavMenu />
          <NavBar />
          {children}
          <Footer />
        </SharedContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
