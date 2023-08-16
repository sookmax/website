import { Decorator } from "@storybook/react";
import { ThemeToggle } from "./ThemeToggle";

export const ThemeToggleDecorator: Decorator = (Story) => (
  <>
    <Story />
    <div className="fixed top-2 right-2">
      <ThemeToggle />
    </div>
  </>
);
