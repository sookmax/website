import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { ThemeToggle, HeaderRoot, AvatarExample } from "@website/components";

export function Header() {
  return (
    <HeaderRoot>
      <AvatarExample />
      <div className="grow flex justify-end md:justify-center">
        <MobileNav className="pointer-events-auto md:hidden" />
        <DesktopNav className="pointer-events-auto hidden md:block" />
      </div>
      <ThemeToggle />
    </HeaderRoot>
  );
}
