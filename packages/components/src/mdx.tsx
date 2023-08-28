"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { format } from "date-fns";
import { cn } from "@website/utils";

export function Img(props: React.ComponentPropsWithoutRef<"img">) {
  return (
    <div className="relative mt-8 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900 [&+*]:mt-8">
      <img
        alt=""
        sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
        {...props}
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
    </div>
  );
}

function ContentWrapper({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="mx-auto px-6 py-4">
      <div className="">
        <div className={cn("mx-auto max-w-xl", className)} {...props} />
      </div>
    </div>
  );
}

function ArticleHeader({ id, date }: { id: string; date: string | Date }) {
  return (
    <header className="sticky top-0 bg-white/50 dark:bg-zinc-900/50 backdrop-blur">
      <div className="flex items-center space-x-1">
        <div className="h-[1px] w-3 bg-gray-400/80 dark:bg-gray-500/80" />
        <a
          href={`#${id}`}
          className="inline-flex text-gray-600 dark:text-gray-300 text-2xs"
        >
          <FormattedDate
            date={date}
            // className="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50"
          />
        </a>
      </div>
    </header>
  );
}

export function Article({
  id,
  date,
  children,
}: {
  id: string;
  date: Date | string;
  children?: React.ReactNode;
}) {
  const heightRef = useRef<React.ElementRef<"div">>(null);
  const [heightAdjustment, setHeightAdjustment] = useState(0);

  useEffect(() => {
    if (!heightRef.current) {
      return;
    }

    const observer = new window.ResizeObserver(() => {
      if (!heightRef.current) {
        return;
      }
      const { height } = heightRef.current.getBoundingClientRect();
      const nextMultipleOf8 = 8 * Math.ceil(height / 8);
      setHeightAdjustment(nextMultipleOf8 - height);
    });

    observer.observe(heightRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article
      id={id}
      // className="scroll-mt-16"
      style={{ paddingBottom: `${heightAdjustment}px` }}
    >
      <div ref={heightRef}>
        <ArticleHeader id={id} date={date} />
        {children && (
          <ContentWrapper className="typography" data-mdx-content>
            {children}
          </ContentWrapper>
        )}
      </div>
    </article>
  );
}

export function Code({
  highlightedCode,
  ...props
}: React.ComponentPropsWithoutRef<"code"> & { highlightedCode?: string }) {
  if (highlightedCode) {
    return (
      <code {...props} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    );
  }

  return <code {...props} />;
}

// const dateFormatter = new Intl.DateTimeFormat("en-US", {
//   year: "numeric",
//   month: "short",
//   day: "numeric",
//   timeZone: "UTC",
// });

function FormattedDate({
  date,
  ...props
}: React.ComponentPropsWithoutRef<"time"> & { date: Date | string }) {
  date = typeof date === "string" ? new Date(date) : date;

  return (
    <time dateTime={date.toISOString()} {...props}>
      {format(date, "MMM. yyyy")}
    </time>
  );
}

export function Timeline() {
  const id = useId();

  return (
    <div className="pointer-events-none absolute inset-0 flex">
      {/* <div className="w-16"></div> */}
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
    </div>
  );
}
