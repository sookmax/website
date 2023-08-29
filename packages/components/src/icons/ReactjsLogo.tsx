import { SVGProps } from "react";
export const ReactjsLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="text-sm me-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"
    viewBox="-10.5 -9.45 21 18.9"
    width="100%"
    height="100%"
    {...props}
  >
    <circle r={2} fill="currentColor" />
    <g stroke="currentColor">
      <ellipse rx={10} ry={4.5} />
      <ellipse rx={10} ry={4.5} transform="rotate(60)" />
      <ellipse rx={10} ry={4.5} transform="rotate(120)" />
    </g>
  </svg>
);
