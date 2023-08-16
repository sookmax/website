import { cn } from "@website/utils";
import { Page } from "@website/ui";

export default function Home() {
  return (
    <div>
      <a
        href="./storybook/index.html"
        target="_blank"
        className={cn("bg-teal-500", "text-white")}
      >
        Go to Storybook
      </a>
      <Page />
    </div>
  );
}
