import React, { useEffect } from "react";

type ScrollState = "top-reached" | "bottom-reached" | "going-down" | "going-up";

const HEADER_TRANSFORM_CSS_VAR = "--header-transform";
const HEADER_TRANSFORM_STYLE = `var(${HEADER_TRANSFORM_CSS_VAR})`;

export function useHeaderInlineStyle(
  headerHeight: number,
): Partial<React.CSSProperties> {
  useEffect(() => {
    let prevScrollY = 0;
    let translateY = 0;
    let prevScrollState: ScrollState | undefined;

    const callback = () => {
      const scrollY = Math.max(
        0,
        Math.min(
          window.scrollY,
          document.body.scrollHeight - window.innerHeight,
        ),
      );
      const scrollState: ScrollState =
        scrollY === 0
          ? "top-reached"
          : scrollY === document.body.scrollHeight - window.innerHeight
          ? "bottom-reached"
          : scrollY > prevScrollY
          ? "going-down"
          : "going-up";

      if (scrollState !== prevScrollState) {
        if (scrollState === "top-reached" || scrollState === "going-up") {
          translateY = 0;
        } else {
          translateY = -headerHeight;
        }

        document.documentElement.style.setProperty(
          HEADER_TRANSFORM_CSS_VAR,
          `translateY(${translateY}px)`,
        );
      }

      prevScrollY = scrollY;
      prevScrollState = scrollState;
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

// function clip(value: number, min: number, max: number) {
//   return Math.max(min, Math.min(value, max));
// }
