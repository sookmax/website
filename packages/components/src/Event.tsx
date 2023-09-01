import { cn } from "@website/utils";
import { format } from "date-fns";

export function Event({
  date,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"article"> & { date: Date | string }) {
  return (
    <article {...rest}>
      <EventHeader date={date} />
      {children && (
        <ContentWrapper className="typography" data-mdx-content>
          {children}
        </ContentWrapper>
      )}
    </article>
  );
}

function ContentWrapper({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="mx-auto px-6 py-12">
      <div className={cn("mx-auto max-w-2xl sm:px-4", className)} {...props} />
    </div>
  );
}

function EventHeader({ date }: { date: string | Date }) {
  return (
    <header className="sticky top-0">
      <div className="flex items-center space-x-1">
        <div className="h-[1px] w-3 bg-gray-400/60 dark:bg-gray-500/60" />
        <div className="grow text-gray-600 dark:text-gray-300 text-2xs bg-white/50 dark:bg-zinc-900/50 backdrop-blur">
          <FormattedDate
            date={date}
            // className="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50"
          />
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
