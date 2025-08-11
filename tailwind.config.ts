import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1FDA53",
        "primary-light": "#59ED82",
        secondary: "#FFFFFF",
        "background-main": "#000000",
        "background-alt": "#0F0F0F",
        "skeleton-primary": "#1f1f1f",
        "skeleton-secondary": "#2c2c2c",
        "skeleton-bg": "#0a0a0a",
        "skeleton-border": "#313131",
      },
    },
  },
  plugins: [],
} satisfies Config;
