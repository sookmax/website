import { DesktopNavExample } from "./DesktopNavExample";
import { ThemeToggle } from "./ThemeToggle";
import { AvatarExample } from "./AvatarExample";

export function DesktopHeaderExample() {
  return (
    <header className="flex justify-between items-center">
      <AvatarExample />
      <DesktopNavExample />
      <ThemeToggle />
    </header>
  );
}
