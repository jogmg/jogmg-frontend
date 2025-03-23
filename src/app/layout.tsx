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
    default: "JoGMG - Joshua Attah's Website",
    template: "%s | JoGMG",
  },
  description:
    "Welcome to the website of Joshua Attah (JoGMG). A software developer who designs and builds business solutions.",
  authors: { name: "Joshua Attah" },
  openGraph: {
    siteName: "JoGMG - Joshua Attah's Website",
    title: "JoGMG",
    description:
      "Welcome to the website of Joshua Attah (JoGMG). A software developer who designs and builds business solutions.",
    type: "website",
    url: "https://jogmg-frontend.vercel.app/",
    images: [
      {
        url: "/images/og-image.webp",
        alt: "JoGMG logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JoGMG",
    description:
      "Welcome to the website of Joshua Attah (JoGMG). A software developer who designs and builds business solutions.",
    images: [
      {
        url: "/images/og-image.webp",
        alt: "JoGMG logo",
      },
    ],
  },
  applicationName: "JoGMG - Joshua Attah's Website",
  appleWebApp: {
    title: "JoGMG - Joshua Attah's Website",
  },
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
