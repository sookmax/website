import type { Meta, StoryObj } from "@storybook/react";
import { ResponsiveHeaderExample } from "./ResponsiveHeaderExample";

const meta = {
  component: ResponsiveHeaderExample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="pt-8 h-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ResponsiveHeaderExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
