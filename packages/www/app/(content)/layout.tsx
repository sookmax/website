import { BaseLayout, ThemeProvider } from "@website/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PageLayout } from "./PageLayout";
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <BaseLayout>
        <PageLayout>{children}</PageLayout>
      </BaseLayout>
    </ThemeProvider>
  );
}
