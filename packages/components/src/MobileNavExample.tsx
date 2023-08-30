import { MobileNavItem, MobileNavRoot } from "./MobileNav.primitives";

export function MobileNavExample({ className }: { className?: string }) {
  return (
    <MobileNavRoot className={className}>
      <MobileNavItem>
        <button>About</button>
      </MobileNavItem>
      <MobileNavItem>
        <button>Current</button>
      </MobileNavItem>
      <MobileNavItem>
        <button>Experience</button>
      </MobileNavItem>
    </MobileNavRoot>
  );
}
