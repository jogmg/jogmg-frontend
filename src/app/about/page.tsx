import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Joshua Attah.",
};

export default function page() {
  return <AboutContent />;
}
