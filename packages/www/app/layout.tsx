import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@website/tailwindcss-config/styles/tailwind.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - sook.dev",
    default: "sook.dev",
  },
  description: "I’m Sook, a web developer.",
  // alternates: {
  //   types: {
  //     "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
  //   },
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // https://github.com/vercel/next.js/issues/49350 for `suppressHydrationWarning`
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
