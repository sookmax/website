import type { Config } from "tailwindcss";
import defaultConfig from "@website/tailwindcss-config";

const config: Config = {
  ...defaultConfig,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
};

export default config;
