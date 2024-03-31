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
        radialGradient: 'radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
