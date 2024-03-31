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
        neue: ['"NeueMontreal"', "sans-serif"],
        neueItalic: ['"NeueMontrealItalic"', "sans-serif"],
        vintage: ['"Vintage"'],
      },
      animation: {
        introSpin: "spin 20s linear infinite",
      },
      backgroundImage: {
        radialGradient: 'radial-gradient(#55E7D5 20%, #1A1A1A 120%)',
      },
    },
  },
  plugins: [],
};
export default config;
