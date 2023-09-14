import { MDXProvider as MDXProviderImpl } from "@mdx-js/react";
import { Components } from "@mdx-js/react/lib";
import React from "react";
import { A } from "./mdx";

const components: Components = {
  a: A,
};

export function MDXProvider({ children }: { children: React.ReactNode }) {
  return <MDXProviderImpl components={components}>{children}</MDXProviderImpl>;
}
