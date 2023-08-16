"use client";
import { ThemeProvider as ThemeProviderImpl, useTheme } from "next-themes";
import React, { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderImpl attribute="class" enableSystem disableTransitionOnChange>
      <ThemeWatcher />
      {children}
    </ThemeProviderImpl>
  );
}

// This component is necessary to override the user (browser) preference (local storage) with system preference
function ThemeWatcher() {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    function onMediaChange() {
      const systemTheme = media.matches ? "dark" : "light";
      if (resolvedTheme === systemTheme) {
        setTheme("system");
      }
    }

    onMediaChange();
    media.addEventListener("change", onMediaChange);

    return () => {
      media.removeEventListener("change", onMediaChange);
    };
  }, [resolvedTheme, setTheme]);

  return null;
}
