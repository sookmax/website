import React, { useEffect, useRef } from "react";

const HEADER_TRANSFORM_CSS_VAR = "--header-transform";
const HEADER_TRANSFORM_STYLE = `var(${HEADER_TRANSFORM_CSS_VAR})`;

export function useHeaderInlineStyle(
  headerHeight: number
): Partial<React.CSSProperties> {
  const prevScrollY = useRef(0);
  const currTranslateY = useRef(0);

  useEffect(() => {
    const callback = () => {
      const delta = window.scrollY - prevScrollY.current;

      currTranslateY.current = clip(
        currTranslateY.current - delta,
        -headerHeight,
        0
      );

      document.documentElement.style.setProperty(
        HEADER_TRANSFORM_CSS_VAR,
        `translateY(${currTranslateY.current}px)`
      );

      prevScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", callback, { passive: true });
    window.addEventListener("resize", callback);

    return () => {
      window.removeEventListener("scroll", callback);
      window.removeEventListener("resize", callback);
    };
  }, [headerHeight]);

  return {
    position: "sticky",
    top: 0,
    // height: headerHeight,
    transform: HEADER_TRANSFORM_STYLE,
  };
}

function clip(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max));
}
