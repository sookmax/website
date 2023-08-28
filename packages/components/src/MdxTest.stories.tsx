import type { Meta, StoryObj } from "@storybook/react";
import MdxTest from "./MdxTest.mdx";
import { ThemeToggle } from "./ThemeToggle";

const meta = {
  component: MdxTest,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <>
        <div className="fixed top-0 right-0 z-50">
          <ThemeToggle />
        </div>
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof MdxTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
