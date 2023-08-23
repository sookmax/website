"use client";
import { DesktopNavExample } from "./DesktopNavExample";
import { MobileNavExample } from "./MobileNavExample";
import { ThemeToggle } from "./ThemeToggle";
import { AvatarExample } from "./AvatarExample";
import { useHeaderInlineStyle } from "./useHeaderInlineStyle";
import { useLayoutEffect, useRef, useState } from "react";

export function HeaderPositionExample() {
  const containerEl = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerInlineStyle = useHeaderInlineStyle(headerHeight);

  useLayoutEffect(() => {
    if (containerEl.current) {
      const { height } = containerEl.current.getBoundingClientRect();
      console.log(height);
      setHeaderHeight(height);
    }
  }, []);

  return (
    <>
      <header
        className="flex justify-between items-center p-4"
        ref={containerEl}
        style={headerInlineStyle}
      >
        <AvatarExample showFrame />
        <div className="grow flex justify-end md:justify-center px-2">
          <MobileNavExample className="pointer-events-auto md:hidden" />
          <DesktopNavExample className="pointer-events-auto hidden md:block" />
        </div>
        <ThemeToggle />
      </header>
      <main className="w-full h-[3000px]" />
    </>
  );
}
