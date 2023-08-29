"use client";

import { Menu, X } from "lucide-react";
import { DialogRoot, DialogTrigger, DialogContent } from "./Dialog.primitive";
import { cn, trim } from "@website/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import React from "react";
import { Slot } from "@radix-ui/react-slot";

export function MobileNavRoot({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <DialogRoot modal>
      <DialogTrigger
        className={cn(
          `
            group flex items-center justify-center rounded-full 
            h-10 w-10 transition outline-none
            p-2 text-sm font-medium 
            bg-white/90
            text-zinc-800 
            shadow-md shadow-zinc-800/10
            ring-2 ring-zinc-900/10
            backdrop-blur 
            dark:bg-zinc-800/90 
            dark:text-zinc-300 
            dark:ring-white/30 
            dark:hover:ring-white/20
            dark:shadow-zinc-200/20
          `,
          className,
        )}
      >
        <Menu
          className={trim(`
                w-5 h-5
                transition
                stroke-zinc-500
                group-hover:stroke-zinc-700 
                dark:stroke-zinc-400 
                dark:group-hover:stroke-zinc-300
            `)}
        />
      </DialogTrigger>
      <DialogContent
        className={trim(`
          fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8
          bg-white ring-1 
          ring-zinc-900/10 
          dark:bg-zinc-900 
          dark:ring-zinc-800`)}
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <DialogClose
            aria-label="Close menu"
            className="-m-1 p-1 outline-none"
          >
            <X className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </DialogClose>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            sook.dev
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            {children}
          </ul>
        </nav>
      </DialogContent>
    </DialogRoot>
  );
}

export function MobileNavItem({ children }: { children?: React.ReactNode }) {
  return (
    <li>
      <Slot className="block py-2">{children}</Slot>
    </li>
  );
}
