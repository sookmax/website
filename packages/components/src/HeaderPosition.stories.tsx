import type { Meta, StoryObj } from "@storybook/react";
import { HeaderPositionExample } from "./HeaderPositionExample";

const meta = {
  component: HeaderPositionExample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof HeaderPositionExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
