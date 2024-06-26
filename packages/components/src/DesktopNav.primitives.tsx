import { cn, trim } from "@website/utils";
import React from "react";
import { Slot } from "@radix-ui/react-slot";

export const DesktopNavRoot = React.forwardRef<
  React.ElementRef<"nav">,
  React.ComponentPropsWithRef<"nav">
>(function NavRoot({ children, ...rest }, ref) {
  return (
    <nav {...rest} ref={ref}>
      <ul
        className={trim(`
        flex px-3 text-sm font-medium
      `)}
      >
        {children}
      </ul>
    </nav>
  );
});

export const DesktopNavItem = React.forwardRef<
  React.ElementRef<"li">,
  React.ComponentPropsWithRef<"li"> & { isActive?: boolean }
>(function NavItem({ children, isActive, className, ...rest }, ref) {
  return (
    <li ref={ref} className={cn(className, "relative")} {...rest}>
      <Slot
        className={cn(
          "block px-3 py-2 transition",
          isActive
            ? "text-primary dark:text-primary-dark"
            : "hover:text-primary dark:hover:text-primary-dark",
        )}
      >
        {children}
      </Slot>
      {isActive && (
        <span
          className={trim(`
            absolute inset-x-1 -bottom-px h-px 
            bg-gradient-to-r from-primatext-primary/0 via-primatext-primary/40 to-primatext-primary/0 
            dark:from-primartext-primary-dark/0 dark:via-primartext-primary-dark/40 dark:to-primartext-primary-dark/0
        `)}
        />
      )}
    </li>
  );
});
