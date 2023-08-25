import type { Meta, StoryObj } from "@storybook/react";
import { ResponsiveHeaderExample } from "./ResponsiveHeaderExample";

const meta = {
  component: ResponsiveHeaderExample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    // W500Decorator,
    (Story) => (
      <div className="top-8 fixed w-full left-1/2 -translate-x-1/2 px-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ResponsiveHeaderExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
