/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // https://github.com/vercel/next.js/issues/52224
  // https://nextjs.org/docs/app/api-reference/next-config-js/transpilePackages
  transpilePackages: ["@website/components", "@website/tailwindcss-config"],
};

module.exports = nextConfig;