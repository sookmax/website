import React, { useMemo } from "react";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { GlobalContext, useGlobalState } from "@/utils/globalState";
import Layout from "@/components/layout";
import { A, Blockquote, Pre } from "@/components/mdx";
import "@/styles/globals.css";
import Image from "@/components/mdx/core/Image";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useGlobalState();

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const components = useMemo(
    () => ({
      a: A,
      pre: Pre(state.theme),
      blockquote: Blockquote,
      Image: Image,
    }),
    [state.theme]
  );

  return (
    <MDXProvider components={components}>
      <GlobalContext.Provider value={contextValue}>
        <Layout pageComponentName={Component.name}>
          {(layoutProps) => <Component {...pageProps} {...layoutProps} />}
        </Layout>
      </GlobalContext.Provider>
    </MDXProvider>
  );
}
