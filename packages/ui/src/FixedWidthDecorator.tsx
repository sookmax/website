import { Decorator } from "@storybook/react";

export const W500Decorator: Decorator = (Story) => (
  <div className="w-[500px]">
    <Story />
  </div>
);

export const W600Decorator: Decorator = (Story) => (
  <div className="w-[600px]">
    <Story />
  </div>
);

export const W700Decorator: Decorator = (Story) => (
  <div className="w-[700px]">
    <Story />
  </div>
);
