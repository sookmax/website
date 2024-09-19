import { cn, trim } from "@website/utils";
import { format } from "date-fns";
import React from "react";

export function Event({
  date,
  from,
  to,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"article"> & {
  date?: Date | string;
  from?: Date | string;
  to?: Date | string;
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
        className={cn("mx-auto max-w-2xl px-1 sm:px-4", className)}
        {...props}
      />
    </div>
  );
}

function EventHeader({ children }: { children: React.ReactNode }) {
  return (
    // the top value depends on the header's height.
    <header
      className={trim(`
    sticky top-14 z-50 -mx-4 sm:-mx-8 px-2 sm:px-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur
    `)}
    >
      <div className="flex items-center space-x-1">
        <div
          className={trim(`
        py-1 grow text-sm sm:text-base font-bold
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
}: React.ComponentPropsWithoutRef<"time"> & { date: Date | string }) {
  date = typeof date === "string" ? new Date(date) : date;

  return (
    <time dateTime={date.toISOString()} {...props}>
      {format(date, "MMM. yyyy")}
    </time>
  );
}

export function StickyEventHeader({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={cn(
        "sticky top-[88px] sm:top-[92px] z-40 -mx-4 sm:-mx-12 md:-mx-16 lg:-mx-20 px-2 sm:px-8 md:px-8 lg:px-2 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur border-b border-gray-400/30 dark:border-white/20",
        className,
      )}
      {...rest}
    ></h2>
  );
}
