import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neue: ['"Neue Montreal"', "sans-serif"],
        neueItalic: ['"Neue Montreal Italic"', "sans-serif"],
      },
      fontSize: {
        "landing": "8rem",
      },
    },
  },
  plugins: [],
};
export default config;
