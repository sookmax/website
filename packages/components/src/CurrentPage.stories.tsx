import type { Meta, StoryObj } from "@storybook/react";
import CurrentPageMDX from "./CurrentPageExample.mdx";
import { PageLayoutExample } from "./PageLayoutExample";

const meta = {
  title: "Page/Current",
  component: CurrentPageMDX,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <PageLayoutExample>
        <Story />
      </PageLayoutExample>
    ),
  ],
} satisfies Meta<typeof CurrentPageMDX>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
