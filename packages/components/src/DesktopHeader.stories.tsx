import type { Meta, StoryObj } from "@storybook/react";
import { DesktopHeaderExample } from "./DesktopHeaderExample";
import { W600Decorator } from "./FixedWidthDecorator";

const meta = {
  component: DesktopHeaderExample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  decorators: [W600Decorator],
} satisfies Meta<typeof DesktopHeaderExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
