import NavBar from "@/app/components/NavBar";
import VideoLoop from "@/app/components/VideoLoop";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";
import { quantico } from "./fonts";
import "./globals.css";
import { SharedContextProvider } from "./SharedContext";

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
    title: "JoGMG - Joshua Attah's Website",
    description:
      "Welcome to the website of Joshua Attah (JoGMG). A software developer who designs and builds business solutions.",
    type: "website",
    url: "https://jogmg-frontend.vercel.app/",
    images: [
      {
        url: "/images/og-image.png",
        alt: "JoGMG logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JoGMG - Joshua Attah's Website",
    description:
      "Welcome to the website of Joshua Attah (JoGMG). A software developer who designs and builds business solutions.",
    images: [
      {
        url: "/images/og-image.png",
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
          <div className="main-container">
            <NavMenu />
            <NavBar />
            {children}
            <Footer />
          </div>
        </SharedContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
