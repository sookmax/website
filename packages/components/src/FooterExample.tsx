import { trim } from "@website/utils";
import { Mail } from "lucide-react";

export function FooterExample() {
  return (
    // https://css-tricks.com/negative-margins/
    // <footer className="mt-8 sm:-mx-8 flex-shrink">
    <footer className="flex-shrink">
      <div
        className={trim(`
      border-t border-zinc-100 py-10 dark:border-zinc-700/40 
      text-sm text-zinc-400 dark:text-zinc-500
      `)}
      >
        <div className="px-4 md:px-8 flex flex-col items-end md:flex-row md:justify-between md:items-center">
          <p className="flex items-center space-x-1 p-2">
            <span className="w-4 h-4 flex justify-center items-center mt-[2px]">
              <Mail />
            </span>
            <span>sukkyu.chung@gmail.com</span>
          </p>
          <p className="p-2">
            &copy; {new Date().getFullYear()} Sukkyu Chung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
