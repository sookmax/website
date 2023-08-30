"use client";

import { trim } from "@website/utils";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      className={trim(`
      group 
      rounded-full bg-white/90 p-2
      shadow-md shadow-zinc-800/10 
      ring-1 ring-zinc-900/10 hover:ring-zinc-900/10
      backdrop-blur transition 
      dark:bg-zinc-800/90 
      dark:ring-white/20 
      dark:hover:ring-white/30
      dark:shadow-zinc-200/10
      `)}
      onClick={() => setTheme(otherTheme)}
    >
      <SunMedium
        className={trim(`
        dark:hidden
        h-6 w-6 transition 
        fill-zinc-100 
        stroke-zinc-500
        group-hover:fill-zinc-200 
        group-hover:stroke-zinc-700 
        group-hover:rotate-45
      `)}
      />
      <Moon
        className={trim(`
        hidden dark:block
        h-6 w-6 transition
        fill-zinc-700 
        stroke-zinc-400 
        group-hover:stroke-zinc-300 
        group-hover:rotate-45
      `)}
      />
    </button>
  );
}
