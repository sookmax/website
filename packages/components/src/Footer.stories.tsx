import type { Meta, StoryObj } from "@storybook/react";
import { FooterExample } from "./FooterExample";
import { ThemeToggleDecorator } from "./ThemeToggleDecorator";

const meta = {
  component: FooterExample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    ThemeToggleDecorator,
    (Story) => (
      <div className="h-screen flex flex-col justify-end">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FooterExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
