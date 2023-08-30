import type { Meta, StoryObj } from "@storybook/react";
import { AboutPageExample } from "./AboutPageExample";
import { PageLayoutExample } from "./PageLayoutExample";

const meta = {
  title: "Page/About",
  component: AboutPageExample,
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
} satisfies Meta<typeof AboutPageExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
