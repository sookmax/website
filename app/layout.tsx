import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Sukkyu Chung",
    default: "Sukkyu Chung - web dev",
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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">{children}</body>
    </html>
  );
}
