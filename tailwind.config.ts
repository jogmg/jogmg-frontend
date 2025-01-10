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
        "primary": "#1FDA53",
        "primary-(light)": "59ED82",
        "secondary": "#FFFFFF",
        "background-(main)": "#000000",
        "background-(alt)": "#0F0F0F",
      },
    },
  },
  plugins: [],
} satisfies Config;
