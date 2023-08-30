'use client';

import { useState } from 'react';
import { DesktopNavRoot, DesktopNavItem } from './DesktopNav.primitives';

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
        <a href="/current" onClick={createOnClick(1)}>
          Current
        </a>
      </DesktopNavItem>
      <DesktopNavItem isActive={activeItemIdx === 2}>
        <a href="/experience" onClick={createOnClick(2)}>
          Experience
        </a>
      </DesktopNavItem>
    </DesktopNavRoot>
  );
}
