import type { Metadata } from "next";
import { quantico } from "./fonts";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import VideoLoop from "@/app/components/VideoLoop";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";
import { SharedContextProvider } from "./SharedContext";
import { ToastContainer } from "react-toastify";

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
        <SharedContextProvider>
          <VideoLoop />
          <ToastContainer />
          <NavMenu />
          <NavBar />
          {children}
          <Footer />
        </SharedContextProvider>
      </body>
    </html>
  );
}
