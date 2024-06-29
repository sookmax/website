import { Avatar } from "./Avatar";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { ThemeToggle, HeaderRoot } from "@website/components";

export function Header() {
  return (
    <HeaderRoot>
      <Avatar />
      <div className="grow flex justify-end md:justify-center">
        <MobileNav className="pointer-events-auto md:hidden" />
        <DesktopNav className="pointer-events-auto hidden md:block" />
      </div>
      <ThemeToggle />
    </HeaderRoot>
  );
}
