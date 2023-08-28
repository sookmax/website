import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-styling";
import { ThemeProvider } from "../src/ThemeProvider";
import { BaseLayout } from "../src/BaseLayout";
import { MDXProvider } from "../src/MDXProvider";

/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import "@website/tailwindcss-config/styles/tailwind.css";
import "@website/tailwindcss-config/styles/fonts.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story) => (
      <MDXProvider>
        <ThemeProvider>
          <BaseLayout>
            <Story />
          </BaseLayout>
        </ThemeProvider>
      </MDXProvider>
    ),
  ],
};

export default preview;
