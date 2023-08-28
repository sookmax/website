export function FooterExample() {
  return (
    // https://css-tricks.com/negative-margins/
    <footer className="mt-8 sm:-mx-8">
      <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
        <div className="px-4 sm:px-8 lg:px-12">
          <p className="text-sm text-zinc-400 dark:text-zinc-500 text-right">
            &copy; {new Date().getFullYear()} Sukkyu Chung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
