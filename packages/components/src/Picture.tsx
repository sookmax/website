"use client";

import { cn, createStore } from "@website/utils";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { LoadingSvg } from "./icons/LoadingSvg";

type ImageStatus = "preload" | "loading" | "loaded" | "cancelled";

const initialState = {
  aspectRatio: 1.667,
  // previewUrl: "",
  showLoading: false,
  imageStatus: "preload" as ImageStatus,
};

const {
  ContextProvider,
  useState: useStoreState,
  useDispatch,
} = createStore(initialState);

export function Root({
  children,
  aspectRatio = 1.667,
}: {
  children: React.ReactNode;
  aspectRatio?: number;
}) {
  const initialState = useMemo(() => {
    return { aspectRatio };
  }, [aspectRatio]);

  return (
    <ContextProvider initialState={initialState}>{children}</ContextProvider>
  );
}

type FigureProps = Omit<React.ComponentPropsWithoutRef<"figure">, "style"> &
  typeof initialState;

const FigureImpl = React.memo(
  React.forwardRef<HTMLElement, FigureProps>(function FigureImpl(
    { aspectRatio, imageStatus, showLoading: _, ...rest },
    ref,
  ) {
    const dispatch = useDispatch();
    const elRef = useRef<HTMLElement | null>(null);

    const setRefs = useCallback<React.RefCallback<HTMLElement>>(
      (_ref) => {
        elRef.current = _ref;
        if (ref) {
          if (typeof ref === "function") {
            ref(_ref);
          } else {
            ref.current = _ref;
          }
        }
      },
      [ref],
    );

    useEffect(() => {
      if (elRef.current) {
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                dispatch((state) => {
                  state.imageStatus = "loading";
                });
                observer.disconnect();
              }
            }
          },
          { threshold: 0 },
        );

        observer.observe(elRef.current);

        return () => {
          dispatch((state) => {
            // this will trigger unnecessary image requests to be cancelled
            state.imageStatus = "cancelled";
          });
          observer.disconnect();
        };
      }
    }, [dispatch]);

    return (
      <figure
        ref={setRefs}
        {...rest}
        style={{
          position: "relative",
          paddingBottom: `${(1 / aspectRatio) * 100}%`,
          // filter: imageStatus === "loaded" ? "blur(0)" : "blur(16px)",
          // backgroundImage: `url(${previewUrl})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // overflow: "hidden",
        }}
      />
    );
  }),
);

export const Figure = React.forwardRef<
  HTMLElement,
  Omit<
    React.ComponentPropsWithoutRef<typeof FigureImpl>,
    keyof typeof initialState
  >
>(function Figure(props, ref) {
  return <FigureImpl ref={ref} {...props} {...useStoreState()} />;
});

type ImgProps = JSX.IntrinsicElements["img"] & {
  imageStatus: ImageStatus;
  onLoad: () => void;
  onLoadScaleAnimation?: boolean;
};

const ImgImpl = React.memo(
  React.forwardRef<HTMLImageElement, ImgProps>(function ImgImpl(
    {
      alt,
      src,
      srcSet,
      sizes,
      imageStatus,
      onLoad,
      onLoadScaleAnimation = false,
      style,
      ...rest
    },
    ref,
  ) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      if (imageStatus === "loading") {
        const img = new Image();
        // the official documentation for `load` event is very hard to find.
        // so instead, decided to go with `HTMLImageElement.decode()`
        // https://html.spec.whatwg.org/multipage/indices.html#event-load
        // https://html.spec.whatwg.org/multipage/images.html#updating-the-image-data
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode
        //
        // BUT weirdly, it turns out `.decode()` throws an error on some thumbnail images in full screen mode,
        // so using `.onload()` for now..
        img.onload = () => {
          setLoaded(true);
          onLoad();
        };

        if (sizes) {
          img.sizes = sizes;
        }
        if (src) {
          img.src = src;
        }
        if (srcSet) {
          img.srcset = srcSet;
        }

        // .decode() must be placed after the source assignments above.
        // else you'd get 'DOMException: The source image cannot be decoded.'
        // img.decode().then(() => {
        //   setLoaded(true);
        //   onLoad();
        // });

        return () => {
          // console.log("canceled");
          img.src = "";
          img.srcset = "";
          img.remove();
        };
      }
    }, [imageStatus, src, srcSet, sizes, onLoad]);

    return (
      <img
        ref={ref}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        {...rest}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transitionProperty: "transform, opacity",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "300ms",
          transform: onLoadScaleAnimation
            ? `scale(${loaded ? 1.0 : 1.1})`
            : undefined,
          opacity: loaded ? 1 : 0,
          visibility: loaded ? "visible" : "hidden",
          ...style,
        }}
      />
    );
  }),
);

export const Img = React.forwardRef<
  HTMLImageElement,
  Omit<
    React.ComponentPropsWithRef<typeof ImgImpl>,
    keyof typeof initialState | "onLoad"
  >
>(function Img(props, ref) {
  const { imageStatus } = useStoreState();
  const dispatch = useDispatch();

  const onLoad = useCallback(() => {
    dispatch((state) => {
      state.imageStatus = "loaded";
    });
  }, [dispatch]);

  return (
    <ImgImpl ref={ref} imageStatus={imageStatus} onLoad={onLoad} {...props} />
  );
});

type SkeletonProps = Omit<JSX.IntrinsicElements["div"], "style"> & {
  imageStatus: ImageStatus;
};

const SkeletonImpl = React.memo(
  React.forwardRef<HTMLDivElement, SkeletonProps>(function SkeletonImpl(
    { imageStatus, className, ...rest },
    ref,
  ) {
    return imageStatus === "loading" ? (
      // <div
      //   ref={ref}
      //   {...rest}
      //   style={{
      //     position: "absolute",
      //     inset: 0,
      //     animation: `2.5s ease 0s infinite normal none running shimmer`,
      //     backgroundImage:
      //       "linear-gradient(to right, transparent, 45%, #e5e7eb, 55%, transparent)",
      //     opacity: 0.3,
      //   }}
      // />
      <div
        ref={ref}
        className={cn(
          className,
          "absolute inset-0 flex justify-center items-center",
        )}
        {...rest}
      >
        <div className="animate-spin h-5 w-5 text-white">
          <LoadingSvg />
        </div>
      </div>
    ) : null;
  }),
);

export const Skeleton = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithRef<typeof SkeletonImpl>, "imageStatus">
>(function Skeleton(props, ref) {
  const { imageStatus } = useStoreState();

  return <SkeletonImpl ref={ref} imageStatus={imageStatus} {...props} />;
});
