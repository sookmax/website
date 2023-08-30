import { Slot } from "@radix-ui/react-slot";
import { cn } from "@website/utils";
import React from "react";

export const AvatarSlot = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithRef<typeof Slot> & { large?: boolean }
>(function AvatarSlot({ large = false, className, children, ...rest }, ref) {
  return (
    <Slot
      ref={ref}
      className={cn(
        className,
        "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
        // "shadow-md shadow-zinc-800/10 dark:shadow-zinc-200/10",
        large ? "h-16 w-16" : "h-10 w-10",
      )}
      {...rest}
    >
      {children}
    </Slot>
  );
});

export const AvatarContainer = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithRef<"div">
>(function AvatarContainer({ className, children, ...rest }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        className,
        `
        rounded-full bg-white/90 p-0.5 
        shadow-md shadow-zinc-800/10 
        ring-1 ring-zinc-900/10
        backdrop-blur 
        dark:bg-zinc-800/90 
        dark:ring-white/20
        dark:shadow-zinc-200/10
        `,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
