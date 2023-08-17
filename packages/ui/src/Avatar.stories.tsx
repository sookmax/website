import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggleDecorator } from "./ThemeToggleDecorator";
import { AvatarExample } from "./AvatarExample";

const meta = {
  component: AvatarExample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  decorators: [ThemeToggleDecorator],
} satisfies Meta<typeof AvatarExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    large: true,
  },
};

export const WithFrame: Story = {
  args: {
    showFrame: true,
  },
};

export const WithFrameLarge: Story = {
  args: {
    showFrame: true,
    large: true,
  },
};
