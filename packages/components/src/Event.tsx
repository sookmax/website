"use client";
import { cn, trim } from "@website/utils";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

export function Event({
  date,
  from,
  to,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"article"> & {
  date?: Date | string;
  from?: Date | string;
  to?: Date | string | "present";
}) {
  return (
    <article {...rest}>
      <EventHeader>
        {date && <FormattedDate date={date} />}
        {from && to && (
          <span>
            <FormattedDate date={from} />
            <span className="mx-1">~</span>
            <FormattedDate date={to} />
          </span>
        )}
      </EventHeader>
      {children && <ContentWrapper data-mdx-content>{children}</ContentWrapper>}
    </article>
  );
}

function ContentWrapper({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="mx-auto pb-4">
      <div
        className={cn("mx-auto max-w-2xl px-1 sm:px-4 relative", className)}
        {...props}
      />
    </div>
  );
}

function EventHeader({ children }: { children: React.ReactNode }) {
  return (
    // the top value depends on the header's height.
    <header
      className={
        "sticky top-14 z-50 -mx-4 sm:-mx-8 px-2 sm:px-8 bg-white dark:bg-zinc-900"
      }
    >
      <div className="flex items-center space-x-1">
        <div
          className={trim(`
        pt-2 grow text-sm sm:text-base font-bold
        `)}
        >
          {children}
        </div>
      </div>
    </header>
  );
}

function FormattedDate({
  date,
  ...props
}: React.ComponentPropsWithoutRef<"time"> & {
  date: Date | string | "present";
}) {
  const [dynamicDate, setDynamicDate] = useState(
    typeof date === "string"
      ? date !== "present"
        ? new Date(date)
        : new Date()
      : date,
  );

  useEffect(() => {
    if (typeof date === "string" && date === "present") {
      setDynamicDate(new Date());
    }
  }, [date]);

  return (
    <time dateTime={dynamicDate.toISOString()} {...props}>
      {format(dynamicDate, "MMM. yyyy")}
    </time>
  );
}

export function StickyEventHeader({
  id,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <>
      <h2
        className={cn(
          "sticky top-[88px] sm:top-[92px] z-40 truncate -mx-4 sm:-mx-12 md:-mx-16 lg:-mx-20 px-2 sm:px-8 md:px-8 lg:px-2 py-2 bg-white dark:bg-zinc-900 shadow-[0_3px_10px_-5px_rgba(0,0,0,0.25)] dark:shadow-[0_3px_10px_-4px_rgba(255,255,255,0.25)]",
          className,
        )}
        {...rest}
      />
      <div aria-hidden className="relative invisible">
        <h2
          id={id}
          aria-hidden
          className="invisible absolute bottom-0 scroll-mt-24 px-2 sm:px-8 md:px-8 lg:px-2 py-2 w-full flex justify-between"
          {...rest}
        />
      </div>
    </>
  );
}
