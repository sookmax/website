import type { Meta, StoryObj } from "@storybook/react";
import EventExample from "./EventExample.mdx";
import { PageLayoutExample } from "./PageLayoutExample";
import { WithRuler } from "./WithRuler";

const meta = {
  component: EventExample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <PageLayoutExample>
        <WithRuler>
          <Story />
        </WithRuler>
      </PageLayoutExample>
    ),
  ],
} satisfies Meta<typeof EventExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
