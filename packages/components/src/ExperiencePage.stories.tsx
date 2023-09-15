import type { Meta, StoryObj } from "@storybook/react";
import ExperiencePageMDX from "./ExperiencePageExample.mdx";
import { PageLayoutExample } from "./PageLayoutExample";

const meta = {
  title: "Page/Experience",
  component: ExperiencePageMDX,
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
} satisfies Meta<typeof ExperiencePageMDX>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
