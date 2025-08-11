import Footer from "@app/components/Footer";
import NavBar from "@app/components/nav/NavBar";
import NavMenu from "@app/components/nav/NavMenu";
import VideoLoop from "@app/components/VideoLoop";
import { quantico } from "@app/fonts";
import "@app/globals.css";
import { SharedContextProvider } from "@app/SharedContext";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: {
    default: "Joshua Attah | Software Developer",
    template: "%s | Joshua Attah | Software Developer",
  },
  description:
    "I help businesses realize high-quality software solutions that meet user needs through design, development, and execution, all from my little room.",
  authors: { name: "Joshua Attah" },
  openGraph: {
    siteName: "Joshua Attah | Software Developer",
    title: "Joshua Attah | Software Developer",
    description:
      "I help businesses realize high-quality software solutions that meet user needs through design, development, and execution, all from my little room.",
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
    title: "Joshua Attah | Software Developer",
    description:
      "I help businesses realize high-quality software solutions that meet user needs through design, development, and execution, all from my little room.",
    images: [
      {
        url: "/images/og-image.png",
        alt: "JoGMG logo",
      },
    ],
  },
  applicationName: "Joshua Attah | Software Developer",
  appleWebApp: {
    title: "Joshua Attah | Software Developer",
  },
  other: {
    msapplicationTileColor: "#1FDA53",
    msapplicationTileImage: "https://jogmg-frontend.vercel.app/apple-icon.png",
    "mobile-web-app-capable": "yes",
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
        <Analytics />
        <SharedContextProvider>
          <VideoLoop />
          <ToastContainer />
          <div className="main_container">
            <NavMenu />
            <NavBar />
            {children}
            <Footer />
          </div>
        </SharedContextProvider>
      </body>
    </html>
  );
}
