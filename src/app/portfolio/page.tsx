import { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Joshua Attah's portfolio projects so far.",
};

export default function page() {
  return <PortfolioContent />;
}
