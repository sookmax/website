import { HomePageExample, ThemeProvider } from "@website/components";

export default function Home() {
  return (
    <ThemeProvider>
      <HomePageExample />
    </ThemeProvider>
  );
}
