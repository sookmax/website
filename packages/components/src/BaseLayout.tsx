import { trim } from "@website/utils";
import React from "react";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-50 dark:bg-black sm:px-8">
      <div
        className={trim(`
      max-w-4xl mx-auto ring-1 px-4 sm:px-8 
      bg-white 
      ring-zinc-100
      dark:bg-zinc-900 
      dark:ring-zinc-300/20
      `)}
      >
        {children}
      </div>
    </div>
  );
}
