import type { Meta, StoryObj } from "@storybook/react";
import { HomePageExample } from "./HomePageExample";

const meta = {
  component: HomePageExample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // decorators: [
  //   (Story) => (
  //     <div className="max-w-4xl mx-auto">
  //       <Story />
  //     </div>
  //   ),
  // ],
} satisfies Meta<typeof HomePageExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
