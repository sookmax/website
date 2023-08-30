import { DesktopNavExample } from "./DesktopNavExample";
import { MobileNavExample } from "./MobileNavExample";
import { ThemeToggle } from "./ThemeToggle";
import { AvatarExample } from "./AvatarExample";

export function ResponsiveHeaderExample() {
  return (
    <header className="flex justify-between items-center">
      <AvatarExample />
      <div className="grow flex justify-end md:justify-center px-2">
        <MobileNavExample className="pointer-events-auto md:hidden" />
        <DesktopNavExample className="pointer-events-auto hidden md:block" />
      </div>
      <ThemeToggle />
    </header>
  );
}
