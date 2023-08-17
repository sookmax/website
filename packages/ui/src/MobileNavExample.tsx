import { MobileNavItem, MobileNavRoot } from "./MobileNav.primitives";

export function MobileNavExample({ className }: { className?: string }) {
  return (
    <MobileNavRoot className={className}>
      <MobileNavItem>
        <button>About</button>
      </MobileNavItem>
      <MobileNavItem>
        <button>Articles</button>
      </MobileNavItem>
      <MobileNavItem>
        <button>Projects</button>
      </MobileNavItem>
      <MobileNavItem>
        <button>Speaking</button>
      </MobileNavItem>
      <MobileNavItem>
        <button>Uses</button>
      </MobileNavItem>
    </MobileNavRoot>
  );
}
