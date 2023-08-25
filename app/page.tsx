import { HeaderPositionExample, ThemeProvider } from "@website/ui";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="mx-auto w-full max-w-5xl">
        <HeaderPositionExample />
      </div>
      <a
        href="./storybook/index.html"
        target="_blank"
        className={"bg-teal-500 text-white text-5xl fixed bottom-2 right-2"}
      >
        Go to Storybook
      </a>
    </ThemeProvider>
  );
}
