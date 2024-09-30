import { Header } from "./Header";
import { FooterExample } from "@website/components";
import React from "react";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="py-8 md:py-16 flex-grow">{children}</main>
      <FooterExample />
    </>
  );
}
