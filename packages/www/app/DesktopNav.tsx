"use client";

import { DesktopNavRoot, DesktopNavItem } from "@website/components";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function DesktopNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <DesktopNavRoot className={className}>
      <DesktopNavItem isActive={pathname === "/about"}>
        <Link href="/about#top">About</Link>
      </DesktopNavItem>
      <DesktopNavItem isActive={pathname === "/current"}>
        <Link href="/current#top">Current</Link>
      </DesktopNavItem>
      <DesktopNavItem isActive={pathname === "/experience"}>
        <Link href="/experience#top">Experience</Link>
      </DesktopNavItem>
    </DesktopNavRoot>
  );
}
