import type { Meta, StoryObj } from "@storybook/react";
import { DesktopHeaderExample } from "./DesktopHeaderExample";

const meta = {
  component: DesktopHeaderExample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="h-screen pt-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DesktopHeaderExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
