"use client";

import { useCallback, useEffect, useRef } from "react";
import { AvatarExample } from "./AvatarExample";
import { MobileNavExample } from "./MobileNavExample";
import { DesktopNavExample } from "./DesktopNavExample";
import { ThemeToggle } from "./ThemeToggle";

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

export function HeaderPositionExample() {
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
          className="sticky top-0 z-10 h-16 pt-6 px-4 flex"
        >
          <AvatarExample showFrame />
          <div className="grow flex justify-end md:justify-center px-2">
            <MobileNavExample className="pointer-events-auto md:hidden" />
            <DesktopNavExample className="pointer-events-auto hidden md:block" />
          </div>
          <ThemeToggle />
        </header>
      </div>
      <main className="p-8 space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>
      </main>
    </>
  );
}
