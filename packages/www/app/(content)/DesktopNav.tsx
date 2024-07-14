"use client";

import { DesktopNavRoot, DesktopNavItem } from "@website/components";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function DesktopNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <DesktopNavRoot className={className}>
      <DesktopNavItem isActive={pathname === "/"}>
        <Link href="/">About</Link>
      </DesktopNavItem>
      <DesktopNavItem isActive={pathname === "/current"}>
        <Link href="/current">Current</Link>
      </DesktopNavItem>
      <DesktopNavItem isActive={pathname === "/experience"}>
        <Link href="/experience">Experience</Link>
      </DesktopNavItem>
      <DesktopNavItem isActive={pathname === "/resume-en"}>
        <Link href="/resume-en">Resume</Link>
      </DesktopNavItem>
    </DesktopNavRoot>
  );
}
