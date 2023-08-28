import type { Meta, StoryObj } from "@storybook/react";
import { MobileNavExample } from "./MobileNavExample";
import { ThemeToggle } from ".";

const meta = {
  component: MobileNavExample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="h-screen pt-8">
        <div className="flex justify-end space-x-2">
          <Story />
          <ThemeToggle />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof MobileNavExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
