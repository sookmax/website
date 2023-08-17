import { ResponsiveHeaderExample, ThemeProvider } from "@website/ui";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex flex-col mx-auto w-full max-w-5xl pt-8 px-8">
        <ResponsiveHeaderExample />
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
    </ThemeProvider>
  );
}
