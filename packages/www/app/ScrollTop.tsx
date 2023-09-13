"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// https://github.com/vercel/next.js/issues/28778#issuecomment-1686854968

export function ScrollTop() {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname]);

  return null;
}
