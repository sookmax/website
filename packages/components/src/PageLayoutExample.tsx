import { HeaderExample } from "./HeaderExample";
import { FooterExample } from "./FooterExample";
import React from "react";

export function PageLayoutExample({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderExample />
      {children}
      <FooterExample />
    </>
  );
}
