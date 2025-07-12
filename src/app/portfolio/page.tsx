import PortfolioContent from "@app/portfolio/PortfolioContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Joshua Attah's portfolio projects so far.",
};

export default function page() {
  return <PortfolioContent />;
}
