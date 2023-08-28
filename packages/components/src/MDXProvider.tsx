import { MDXProvider as MDXProviderImpl } from "@mdx-js/react";
import { Components } from "@mdx-js/react/lib";
import React from "react";
import { Article } from "./mdx";

const components: Components = {
  //   article: props => <Article {...props} />
  Article,
};

export function MDXProvider({ children }: { children: React.ReactNode }) {
  return <MDXProviderImpl components={components}>{children}</MDXProviderImpl>;
}
