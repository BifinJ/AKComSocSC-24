import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        c1: "#021024",
        c2: "#052659",
        c3: "#5483B3",
        c4: "#7DA0CA",
        c5: "#C1E8FF",
        cwhite: "#F5F5F5",
        cblack: "#262626",
        coffwhite: "#F3F6FF",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, #C1E8FF 3.33%, #5483B3 94.45%, rgba(125, 160, 202, 0.95) 106.87%)",
      },
      fontFamily: {
        futura: ["Futura", "sans-serif"],
        open: ["Open Sans", "Arial", "sans-serif"],
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [],
};
export default config;
