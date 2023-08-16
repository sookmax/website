import { cn } from "@website/utils";
import { DesktopNavExample, ThemeProvider, ThemeToggle } from "@website/ui";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex flex-col w-full items-center p-2">
        <DesktopNavExample />
        <div className="mt-12">
          <a
            href="./storybook/index.html"
            target="_blank"
            className={"bg-teal-500 text-white text-5xl"}
          >
            Go to Storybook
          </a>
        </div>
      </div>
      <div className="fixed top-2 right-2">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
