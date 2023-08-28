import type { Meta, StoryObj } from "@storybook/react";
import { AvatarExample } from "./AvatarExample";
import { ThemeToggle } from "./ThemeToggle";

const meta = {
  component: AvatarExample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="h-screen pt-8">
        <div className="flex justify-between items-center">
          <Story />
          <ThemeToggle />
        </div>
      </div>
    ),
  ],
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
