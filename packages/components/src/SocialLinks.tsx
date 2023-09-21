import { GithubSvg } from "./icons/GithubSvg";
import { LinkedInSvg } from "./icons/LinkedInSvg";

export function SocialLinks() {
  return (
    <div className="flex space-x-2">
      <a
        className="flex justify-center items-center h-6 w-6"
        href="https://github.com/sookmax"
        target="_blank"
      >
        <GithubSvg />
      </a>
      <a
        className="flex justify-center items-center h-6 w-6"
        href="https://www.linkedin.com/in/sukkyu-sook-chung/"
        target="_blank"
      >
        <LinkedInSvg />
      </a>
    </div>
  );
}
