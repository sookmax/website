import type { Meta, StoryObj } from "@storybook/react";
import { DesktopNavExample } from "./DesktopNavExample";
import { ThemeToggle } from "./ThemeToggle";

const meta = {
  component: DesktopNavExample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="h-screen pt-8">
        <div className="flex justify-between">
          <div />
          <Story />
          <ThemeToggle />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof DesktopNavExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
