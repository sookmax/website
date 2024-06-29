import type { Meta, StoryObj } from "@storybook/react";
import { ResumeEn } from "./ResumeEn";

const meta = {
  title: "Page/Resume-En",
  component: ResumeEn,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof ResumeEn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
