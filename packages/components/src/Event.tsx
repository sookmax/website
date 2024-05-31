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
    sticky top-14 z-40 -mx-4 sm:-mx-8 px-4 sm:px-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur
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
