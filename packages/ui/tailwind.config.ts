import type { Config } from "tailwindcss";
import rootConfig from "../../tailwind.config";

const config: Config = {
  ...rootConfig,
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
};

export default config;
