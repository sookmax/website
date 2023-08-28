import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {},
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    const storybookMdxPluginIndex = config.plugins?.findIndex(
      (plugin) =>
        !Array.isArray(plugin) &&
        (plugin as { name: string }).name === "storybook:mdx-plugin"
    );

    if (storybookMdxPluginIndex !== undefined) {
      config.plugins?.splice(storybookMdxPluginIndex, 1);
    }

    return config;
  },
};
export default config;
