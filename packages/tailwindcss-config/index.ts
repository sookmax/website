// import fs from "fs";
// import path from "path";
import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import pluginTypography from "@tailwindcss/typography";
// @ts-ignore
import pluginAnimate from "@website/tailwindcss-plugin-animate";
// import plaiceholder from "@plaiceholder/tailwindcss";

// const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [], // this will be provided by each consumer.
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  plugins: [
    pluginTypography,
    pluginAnimate,
    // plaiceholder({
    //   resolver(src) {
    //     //   console.log(src);
    //     return fs.readFileSync(
    //       path.join(path.resolve("./public"), `${src}.png`),
    //     );
    //   },
    // }),
  ],
  theme: {
    fontSize: {
      "2xs": ".6875rem",
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      display: "Mona Sans",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#087EA4",
          dark: "#149ECA",
        },
        secondary: {
          DEFAULT: "#FF4785",
        },
      },
    },
  },
};

export default config;
