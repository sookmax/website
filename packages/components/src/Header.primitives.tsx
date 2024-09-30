"use client";

import { cn } from "@website/utils";
import React, { useEffect, useRef, useState } from "react";
import throttle from "lodash/throttle";

export function HeaderRoot({ children }: { children?: React.ReactNode }) {
  const headerRef = useRef<HTMLElement>(null);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const scrollListener = throttle(() => {
      if (window.scrollY < 20) {
        setShowShadow(false);
      } else {
        setShowShadow(true);
      }
    }, 100);

    document.addEventListener("scroll", scrollListener);

    return () => {
      document.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          `flex-shrink-0 sticky top-0 z-[60] transition-shadow bg-white dark:bg-zinc-900 -mx-4 sm:-mx-8 px-3 md:px-4 py-2`,
          showShadow &&
            "shadow-[0_3px_10px_-5px_rgba(0,0,0,0.25)] dark:shadow-[0_3px_10px_-4px_rgba(255,255,255,0.25)]",
        )}
      >
        <header ref={headerRef} className="flex">
          {children}
        </header>
      </div>
    </>
  );
}
