import type { Meta, StoryObj } from "@storybook/react";
import { MobileHeaderExample } from "./MobileHeaderExample";

const meta = {
  component: MobileHeaderExample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    // W500Decorator,
    (Story) => (
      <div className="h-screen pt-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MobileHeaderExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
