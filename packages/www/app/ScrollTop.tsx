"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// https://github.com/vercel/next.js/issues/28778#issuecomment-1686854968

let top0Requested = false;
export function requestTopO() {
  top0Requested = true;
}

export function ScrollTop() {
  const pathname = usePathname();

  useEffect(() => {
    let requestId: number | undefined;
    if (top0Requested) {
      const rAFCallback = () => {
        if (window.scrollY !== 0) {
          window.scrollTo({ top: 0 });
          requestId = requestAnimationFrame(rAFCallback);
        } else {
          top0Requested = false;
        }
      };
      requestId = requestAnimationFrame(rAFCallback);
    }

    return () => {
      requestId && cancelAnimationFrame(requestId);
    };
  }, [pathname]);

  return null;
}
