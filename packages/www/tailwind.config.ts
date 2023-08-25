import { Config } from "tailwindcss";
import defaultConfig from "@website/tailwindcss-config";

const config: Config = {
  ...defaultConfig,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../components/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
