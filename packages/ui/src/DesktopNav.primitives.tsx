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
        flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 
        shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur 
        dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10
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
            ? "text-teal-500 dark:text-teal-400"
            : "hover:text-teal-500 dark:hover:text-teal-400"
        )}
      >
        {children}
      </Slot>
      {isActive && (
        <span
          className={trim(`
            absolute inset-x-1 -bottom-px h-px 
            bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 
            dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0
        `)}
        />
      )}
    </li>
  );
});
