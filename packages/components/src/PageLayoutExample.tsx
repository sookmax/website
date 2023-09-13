import { HeaderExample } from "./HeaderExample";
import { FooterExample } from "./FooterExample";
import React from "react";

export function PageLayoutExample({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderExample />
      <main className="py-8 md:py-16">{children}</main>
      <FooterExample />
    </>
  );
}
