"use client";

import { DesktopNavRoot, DesktopNavItem } from "@website/components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { requestTopO } from "./ScrollTop";

export function DesktopNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <DesktopNavRoot className={className}>
      <DesktopNavItem isActive={pathname === "/"}>
        <Link href="/" onClick={requestTopO}>
          About
        </Link>
      </DesktopNavItem>
      <DesktopNavItem isActive={pathname === "/current"}>
        <Link href="/current" onClick={requestTopO}>
          Current
        </Link>
      </DesktopNavItem>
      <DesktopNavItem isActive={pathname === "/experience"}>
        <Link href="/experience" onClick={requestTopO}>
          Experience
        </Link>
      </DesktopNavItem>
    </DesktopNavRoot>
  );
}
