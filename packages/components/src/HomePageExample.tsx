"use client";

import { useCallback, useEffect, useRef } from "react";
import { AvatarExample } from "./AvatarExample";
import { MobileNavExample } from "./MobileNavExample";
import { DesktopNavExample } from "./DesktopNavExample";
import { ThemeToggle } from "./ThemeToggle";
import { FooterExample } from "./FooterExample";

const HEADER_CONTAINER_HEIGHT_VAR = "--header-container-height";
const HEADER_CONTAINER_HEIGHT_VAL = `var(${HEADER_CONTAINER_HEIGHT_VAR})`;
const HEADER_CONTAINER_MB_VAR = "--header-container-mb";
const HEADER_CONTAINER_MB_VAL = `var(${HEADER_CONTAINER_MB_VAR})`;

function setProperty(property: string, value: string) {
  document.documentElement.style.setProperty(property, value);
}

// function removeProperty(property: string) {
//   document.documentElement.style.removeProperty(property);
// }

function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

export function HomePageExample() {
  const headerRef = useRef<HTMLElement>(null);

  const updateHeaderStyles = useCallback(() => {
    if (!headerRef.current) return;

    const { top: headerTop, height: headerHeight } =
      headerRef.current.getBoundingClientRect();

    const scrollY = clamp(
      window.scrollY,
      0,
      document.body.scrollHeight - window.innerHeight
    );

    if (scrollY < 0) {
      setProperty(HEADER_CONTAINER_HEIGHT_VAR, `${headerHeight}px`);
      setProperty(HEADER_CONTAINER_MB_VAR, `0px`);
    } else if (headerTop + headerHeight < -headerHeight) {
      const offset = Math.max(headerHeight, scrollY - headerHeight);
      setProperty(HEADER_CONTAINER_HEIGHT_VAR, `${offset}px`);
      setProperty(HEADER_CONTAINER_MB_VAR, `${headerHeight - offset}px`);
    } else if (headerTop === 0) {
      setProperty(HEADER_CONTAINER_HEIGHT_VAR, `${scrollY + headerHeight}px`);
      setProperty(HEADER_CONTAINER_MB_VAR, `${-scrollY}px`);
    }
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    const { height: headerHeight } = headerRef.current.getBoundingClientRect();

    setProperty(HEADER_CONTAINER_HEIGHT_VAR, `${headerHeight}px`);
    setProperty(HEADER_CONTAINER_MB_VAR, `0px`);

    window.addEventListener("scroll", updateHeaderStyles, { passive: true });
    window.addEventListener("resize", updateHeaderStyles);

    return () => {
      window.removeEventListener("scroll", updateHeaderStyles);
      window.removeEventListener("resize", updateHeaderStyles);
    };
  }, [updateHeaderStyles]);

  return (
    <>
      <div
        className="relative z-50"
        style={{
          height: HEADER_CONTAINER_HEIGHT_VAL,
          marginBottom: HEADER_CONTAINER_MB_VAL,
        }}
      >
        <header
          ref={headerRef}
          className="sticky top-0 z-10 h-16 pt-6 px-3 flex"
        >
          <AvatarExample showFrame />
          <div className="grow flex justify-end md:justify-center px-2">
            <MobileNavExample className="pointer-events-auto md:hidden" />
            <DesktopNavExample className="pointer-events-auto hidden md:block" />
          </div>
          <ThemeToggle />
        </header>
      </div>
      <main className="p-8">
        <h1 className="mt-10 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          <div>Hi, I’m Sook.</div>
          <div>A web developer.</div>
        </h1>
        <div className="mt-12 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            Well actually, I did not start out as a web developer, but rather as
            a data analyst after graduating college back in 2015. In hindsight,
            I think I had always been more drawn to data visualization than any
            other aspects of data analysis, which had probably been the
            strongest motivator that eventually led me to web development. And
            now, I'm happier and more fulfilled as a web developer.
          </p>
          <p>
            As much as I like web development though, I think it is also fairly
            hard. A part of it might be because there are so many&mdash;often
            completely different&mdash;ways to achieve similar end results (JS
            frameworks, for example). Another part of it might have to do with
            the difficulty supporting multiple browsers and various devices. Or
            the fact that it's almost too easy to introduce visual regressions
            with the slightest change in the code base, whereas it's relatively
            harder to detect them in a timely manner could also be a part of web
            development being quite difficult. I've observed all these
            challenges being amplified even further when there are multiple
            developers involved, as opposed to when I am the only developer of a
            particular project.
          </p>
          <p>
            Despite the challenges, I understand building a great product
            requires a <em>team</em> of great engineers; I think well-made
            software products are the culmination of immense collaborative
            effort among great people. My ultimate goal is to be a part of such
            team. And I believe the best way to achieve that is to become a
            sufficiently competent dev myself.
          </p>
          <p>
            So here I am, trying to be a better web dev than yesterday, everyday
            :)
          </p>
        </div>
      </main>
      <FooterExample />
    </>
  );
}
