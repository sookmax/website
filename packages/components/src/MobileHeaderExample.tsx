import { MobileNavExample } from "./MobileNavExample";
import { ThemeToggle } from "./ThemeToggle";
import { AvatarExample } from "./AvatarExample";

export function MobileHeaderExample() {
  return (
    <header className="flex justify-between items-center">
      <AvatarExample showFrame />
      <div className="grow flex justify-end px-2">
        <MobileNavExample />
      </div>
      <ThemeToggle />
    </header>
  );
}
