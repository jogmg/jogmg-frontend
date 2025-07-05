import { Metadata } from "next";
import PortfolioContainer from "./PortfolioContainer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Joshua Attah's portfolio projects so far.",
};

export default function page() {
  return <PortfolioContainer />;
}
