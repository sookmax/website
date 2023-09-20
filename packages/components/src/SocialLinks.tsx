import { Github, Linkedin } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex space-x-1">
      <a
        className="flex justify-center items-center h-8 w-8"
        href="https://github.com/sookmax"
        target="_blank"
      >
        <Github />
      </a>
      <a
        className="flex justify-center items-center h-8 w-8"
        href="https://www.linkedin.com/in/sukkyu-sook-chung/"
        target="_blank"
      >
        <Linkedin />
      </a>
    </div>
  );
}
