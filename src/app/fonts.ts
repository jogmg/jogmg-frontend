import { Quantico, Lexend } from "next/font/google";
import localFont from "next/font/local";

export const quantico = Quantico({
  weight: ["400"],
  subsets: ["latin"],
});

export const consolas = localFont({
  src: "../../public/fonts/consolas.ttf",
});

export const lexend = Lexend({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
