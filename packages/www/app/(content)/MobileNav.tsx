"use client";

import {
  MobileNavItem,
  MobileNavRoot,
  SocialLinks,
  generateImageUrl,
} from "@website/components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <MobileNavRoot className={className} open={open} onOpenChange={setOpen}>
      <MobileNavItem isActive={pathname === "/"}>
        <Link href="/">About</Link>
      </MobileNavItem>
      <MobileNavItem isActive={pathname === "/current"}>
        <Link href="/current">Current</Link>
      </MobileNavItem>
      <MobileNavItem isActive={pathname === "/experience"}>
        <Link href="/experience">Experience</Link>
      </MobileNavItem>
      <MobileNavItem>
        <a
          href={generateImageUrl("/resume_en.pdf")}
          download="sukkyu_chung_resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </MobileNavItem>
      <MobileNavItem>
        <div className="mt-4 opacity-70 flex justify-end">
          <SocialLinks />
        </div>
      </MobileNavItem>
    </MobileNavRoot>
  );
}
