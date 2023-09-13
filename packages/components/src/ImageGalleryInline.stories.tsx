import type { Meta, StoryObj } from "@storybook/react";
import { ImageGalleryInline } from "./ImageGalleryInline";
import { PageLayoutExample } from "./PageLayoutExample";

const meta = {
  component: ImageGalleryInline,
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
} satisfies Meta<typeof ImageGalleryInline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrls: [
      "/epem-cms-1.png",
      "/epem-cms-2.png",
      "/epem-cms-3.png",
      "/epem-cms-4.png",
      "/epem-cms-5.png",
      "/epem-cms-6.png",
      "/epem-cms-7.png",
    ],
  },
};
