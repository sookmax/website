import { cn } from "@website/utils";
import React, { useId } from "react";

export function WithRuler({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn(className, "relative")}>
      <div className="pointer-events-none absolute inset-0">
        <RulerSVG />
      </div>
      {children}
    </div>
  );
}

function RulerSVG() {
  const id = useId();
  return (
    <svg className="h-full w-1.5" aria-hidden="true">
      <defs>
        <pattern id={id} width="6" height="8" patternUnits="userSpaceOnUse">
          <path
            d="M0 0H6M0 8H6"
            className="stroke-gray-300 dark:stroke-white/10 xl:stroke-white/10"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
