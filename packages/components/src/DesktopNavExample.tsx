"use client";

import { useState } from "react";
import { DesktopNavRoot, DesktopNavItem } from "./DesktopNav.primitives";

export function DesktopNavExample({ className }: { className?: string }) {
  const [activeItemIdx, setActiveItemIdx] = useState(-1);

  const createOnClick: (
    index: number,
  ) => React.MouseEventHandler<HTMLAnchorElement> = (index) => (e) => {
    e.preventDefault();
    setActiveItemIdx(index);
  };

  return (
    <DesktopNavRoot className={className}>
      <DesktopNavItem isActive={activeItemIdx === 0}>
        <a href="/about" onClick={createOnClick(0)}>
          About
        </a>
      </DesktopNavItem>
      <DesktopNavItem isActive={activeItemIdx === 1}>
        <a href="/articles" onClick={createOnClick(1)}>
          Articles
        </a>
      </DesktopNavItem>
      <DesktopNavItem isActive={activeItemIdx === 2}>
        <a href="/projects" onClick={createOnClick(2)}>
          Projects
        </a>
      </DesktopNavItem>
      <DesktopNavItem isActive={activeItemIdx === 3}>
        <a href="/speaking" onClick={createOnClick(3)}>
          Speaking
        </a>
      </DesktopNavItem>
      <DesktopNavItem isActive={activeItemIdx === 4}>
        <a href="/uses" onClick={createOnClick(4)}>
          Uses
        </a>
      </DesktopNavItem>
    </DesktopNavRoot>
  );
}
