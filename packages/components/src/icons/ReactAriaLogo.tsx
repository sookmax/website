import { SVGProps } from "react";

export const ReactAriaLogo = (props: SVGProps<SVGSVGElement>) => (
  <div className="flex items-center space-x-2 md:space-x-4">
    <svg
      viewBox="0 0 30 26"
      fill="#E1251B"
      aria-label="Adobe"
      height="100%"
      width="100%"
      {...props}
    >
      <polygon points="19,0 30,0 30,26" />
      <polygon points="11.1,0 0,0 0,26" />
      <polygon points="15,9.6 22.1,26 17.5,26 15.4,20.8 10.2,20.8" />
    </svg>
    <p className="font-semibold text-lg">React Aria</p>
  </div>
);
