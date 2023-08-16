import type { Meta, StoryObj } from "@storybook/react";
import { DesktopNavExample } from "./DesktopNavExample";
import { ThemeToggleDecorator } from "./ThemeToggleDecorator";

const meta = {
  component: DesktopNavExample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  decorators: [ThemeToggleDecorator],
} satisfies Meta<typeof DesktopNavExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
