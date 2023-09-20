import { AvatarExample } from "./AvatarExample";
import { MobileNavExample } from "./MobileNavExample";
import { DesktopNavExample } from "./DesktopNavExample";
import { ThemeToggle } from "./ThemeToggle";
import { HeaderRoot } from "./Header.primitives";

export function HeaderExample() {
  return (
    <HeaderRoot>
      <AvatarExample />
      <div className="grow flex justify-end md:justify-center">
        <MobileNavExample className="pointer-events-auto md:hidden" />
        <DesktopNavExample className="pointer-events-auto hidden md:block" />
      </div>
      <ThemeToggle />
    </HeaderRoot>
  );
}
