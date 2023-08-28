import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  // https://mdxjs.com/docs/getting-started/#vite
  plugins: [{ enforce: "pre", ...mdx() }, react()],
});
