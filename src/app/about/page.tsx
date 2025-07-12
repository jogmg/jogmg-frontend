import AboutContent from "@app/about/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Joshua Attah.",
};

export default function page() {
  return <AboutContent />;
}
