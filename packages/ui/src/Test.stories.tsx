import type { Meta, StoryObj } from "@storybook/react";
import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";

function setProperty(property: string, value: string) {
  document.documentElement.style.setProperty(property, value);
}

function removeProperty(property: string) {
  document.documentElement.style.removeProperty(property);
}

function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

function TestComponent() {
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
      setProperty("--header-container-height", `${headerHeight}px`);
      setProperty("--header-container-mb", `0px`);
    } else if (headerTop + headerHeight < -headerHeight) {
      const offset = Math.max(headerHeight, scrollY - headerHeight);
      setProperty("--header-container-height", `${offset}px`);
      setProperty("--header-container-mb", `${headerHeight - offset}px`);
    } else if (headerTop === 0) {
      setProperty("--header-container-height", `${scrollY + headerHeight}px`);
      setProperty("--header-container-mb", `${-scrollY}px`);
    }
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    const { height: headerHeight } = headerRef.current.getBoundingClientRect();

    setProperty("--header-container-height", `${headerHeight}px`);
    setProperty("--header-container-mb", `0px`);

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
        className="pointer-events-none relative z-50 bg-red-300/50"
        style={{
          height: "var(--header-container-height)",
          marginBottom: "var(--header-container-mb)",
        }}
      >
        <header ref={headerRef} className="sticky top-0 z-10 h-16 pt-6">
          <div className="w-full">I'm header</div>
        </header>
      </div>
      <main className="h-[5000px]">I'm body</main>
    </>
  );
}

function StickyTest() {
  return (
    <dl className="pt-10 pb-96">
      <div className="h-[100px]">
        <dt className="sticky top-0 h-20 bg-green-200">A</dt>
        {/* <dd className="h-20">Andrew W.K.</dd> */}
        {/* <dd className="h-20">Andrew W.K.</dd>
        <dd className="h-20">Apparat</dd>
        <dd className="h-20">Arcade Fire</dd>
        <dd className="h-20">At The Drive-In</dd>
        <dd className="h-20">Aziz Ansari</dd> */}
      </div>
      <div>
        <dt className="sticky top-0 h-20 bg-red-200">C</dt>
        <dd className="h-20">Chromeo</dd>
        <dd className="h-20">Common</dd>
        <dd className="h-20">Converge</dd>
        <dd className="h-20">Crystal Castles</dd>
        <dd className="h-20">Cursive</dd>
      </div>
      <div>
        <dt className="sticky top-0 h-20 bg-emerald-200">E</dt>
        <dd className="h-20">Explosions In The Sky</dd>
      </div>
      <div>
        <dt className="sticky top-0 h-20 bg-purple-200">T</dt>
        <dd className="h-20">Ted Leo &amp; The Pharmacists</dd>
        <dd className="h-20">T-Pain</dd>
        <dd className="h-20">Thrice</dd>
        <dd className="h-20">TV On The Radio</dd>
        <dd className="h-20">Two Gallants</dd>
      </div>
    </dl>
  );
}

const meta = {
  component: TestComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
