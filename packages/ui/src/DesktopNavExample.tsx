"use client";

import { useState } from "react";
import { NavRoot, NavItem } from "./DesktopNav.primitives";

export function DesktopNavExample() {
  const [activeItemIdx, setActiveItemIdx] = useState(-1);

  const createOnClick: (
    index: number
  ) => React.MouseEventHandler<HTMLAnchorElement> = (index) => (e) => {
    e.preventDefault();
    setActiveItemIdx(index);
  };

  return (
    <NavRoot>
      <NavItem isActive={activeItemIdx === 0}>
        <a href="/about" onClick={createOnClick(0)}>
          About
        </a>
      </NavItem>
      <NavItem isActive={activeItemIdx === 1}>
        <a href="/articles" onClick={createOnClick(1)}>
          Articles
        </a>
      </NavItem>
      <NavItem isActive={activeItemIdx === 2}>
        <a href="/projects" onClick={createOnClick(2)}>
          Projects
        </a>
      </NavItem>
      <NavItem isActive={activeItemIdx === 3}>
        <a href="/speaking" onClick={createOnClick(3)}>
          Speaking
        </a>
      </NavItem>
      <NavItem isActive={activeItemIdx === 4}>
        <a href="/uses" onClick={createOnClick(4)}>
          Uses
        </a>
      </NavItem>
    </NavRoot>
  );
}
