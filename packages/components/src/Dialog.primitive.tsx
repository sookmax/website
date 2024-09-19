import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@website/utils";
import React from "react";

export const DialogRoot = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithRef<typeof DialogPrimitive.Content>
>(function DialogContent({ className, children, ...rest }, ref) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className={cn(`
            fixed inset-0 z-[60]
            backdrop-blur-sm 
            bg-zinc-800/40
            dark:bg-black/80
            data-[state=open]:animate-in
            data-[state=open]:fade-in-0
            data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0`)}
      >
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            `
            z-50
            data-[state=open]:animate-in
            data-[state=open]:fade-in-0
            data-[state=open]:zoom-in-95
            data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0
            data-[state=closed]:zoom-out-95`,
            className,
          )}
          {...rest}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Overlay>
    </DialogPrimitive.Portal>
  );
});
