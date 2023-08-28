/// <reference types="vite/client" />

// https://github.com/brillout/vite-plugin-mdx/issues/27
declare module "*.mdx" {
  let MDXComponent: (props: Record<string, unknown>) => JSX.Element;
  export default MDXComponent;
}
