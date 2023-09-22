import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn, createStore } from "@website/utils";
import * as Picture from "./Picture";

const PropsContext = React.createContext<Omit<ImageGalleryProps, "children">>({
  imageUrls: [],
});

const initialState = {
  imageIndex: 0,
  thumbnailItemScrollIntoView: (imageIndex: number) => {
    console.error("thumbnailItemScrollIntoView() was not updated properly.");
  },
};

export type ImageGalleryState = typeof initialState;

const {
  ContextProvider,
  useState: useStoreState,
  useDispatch,
} = createStore(initialState);

export type ImageGalleryProps = {
  imageUrls: string[];
  children: React.ReactNode;
  imageIndex?: number;
  setImageIndex?: React.Dispatch<React.SetStateAction<number>>;
};

export function ImageGalleryRoot({
  imageUrls,
  imageIndex,
  setImageIndex,
  children,
}: ImageGalleryProps) {
  return (
    <PropsContext.Provider value={{ imageUrls, imageIndex, setImageIndex }}>
      <ContextProvider initialState={initialState}>
        <div className="relative w-full bg-zinc-800">{children}</div>
      </ContextProvider>
    </PropsContext.Provider>
  );
}

export function ImageGalleryMainImage({
  aspectRatio = 1.6,
  showSkeleton = true,
  loading = "lazy",
}: {
  aspectRatio?: number;
  showSkeleton?: boolean;
  loading?: React.ComponentProps<"img">["loading"];
}) {
  const { imageIndex: imageIndexState } = useStoreState();
  const { imageUrls, imageIndex: imageIndexProps } = useContext(PropsContext);

  const imageIndex = imageIndexProps ?? imageIndexState;

  return (
    <Picture.Root aspectRatio={aspectRatio}>
      <Picture.Figure>
        {showSkeleton && <Picture.Skeleton />}
        <Picture.Img
          loading={loading}
          onLoadScaleAnimation={false}
          src={imageUrls[imageIndex]}
        />
      </Picture.Figure>
    </Picture.Root>
  );
}

export function ImageGalleryNavButtons() {
  const { imageUrls, setImageIndex } = useContext(PropsContext);
  const dispatch = useDispatch();
  const { thumbnailItemScrollIntoView } = useStoreState();

  const updateImageIndexByDirection = useCallback(
    (direction: -1 | 1) => {
      return () => {
        if (setImageIndex) {
          setImageIndex((index) => {
            let nextImageIndex = index + direction;
            if (nextImageIndex < 0) {
              nextImageIndex = imageUrls.length - 1;
            } else if (nextImageIndex > imageUrls.length - 1) {
              nextImageIndex = 0;
            }

            // not sure if this is safe to do
            thumbnailItemScrollIntoView(nextImageIndex);

            return nextImageIndex;
          });
        } else {
          dispatch((state) => {
            let nextImageIndex = state.imageIndex + direction;
            if (nextImageIndex < 0) {
              nextImageIndex = imageUrls.length - 1;
            } else if (nextImageIndex > imageUrls.length - 1) {
              nextImageIndex = 0;
            }

            // not sure if this is safe to do
            thumbnailItemScrollIntoView(nextImageIndex);

            state.imageIndex = nextImageIndex;
          });
        }
      };
    },
    [imageUrls.length, dispatch, setImageIndex, thumbnailItemScrollIntoView],
  );

  const goToNextImage = useMemo(
    () => updateImageIndexByDirection(1),
    [updateImageIndexByDirection],
  );
  const goToPrevImage = useMemo(
    () => updateImageIndexByDirection(-1),
    [updateImageIndexByDirection],
  );

  return (
    <>
      <button
        className="opacity-50 absolute top-1/2 -translate-y-1/2 right-2 text-white bg-zinc-900/50 z-30 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
        onClick={goToNextImage}
      >
        <ChevronRight />
      </button>
      <button
        className="opacity-50 absolute top-1/2 -translate-y-1/2 left-2 text-white bg-zinc-900/50 z-30 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
        onClick={goToPrevImage}
      >
        <ChevronLeft />
      </button>
    </>
  );
}

export const ImageGalleryThumbnails = React.forwardRef<
  HTMLDivElement,
  {
    showSkeleton?: boolean;
    loading?: React.ComponentProps<"img">["loading"];
  }
>(function ImageGalleryThumbnails(
  { showSkeleton = true, loading = "lazy" },
  ref,
) {
  const { imageIndex: imageIndexState } = useStoreState();
  const {
    imageUrls,
    imageIndex: imageIndexProps,
    setImageIndex,
  } = useContext(PropsContext);
  const dispatch = useDispatch();
  const thumbnailsElementRef = useRef<HTMLUListElement>(null);

  const imageIndex = imageIndexProps ?? imageIndexState;

  const thumbnailItemScrollIntoView = useCallback((imageIndex: number) => {
    if (
      thumbnailsElementRef.current &&
      thumbnailsElementRef.current.children.item(imageIndex)
    ) {
      const item = thumbnailsElementRef.current.children.item(imageIndex);
      item?.scrollIntoView({ inline: "center", block: "nearest" });
    }
  }, []);

  const goToImage = useCallback(
    (index: number) => {
      return () => {
        if (setImageIndex) {
          setImageIndex((currentIndex) => {
            return currentIndex !== index ? index : currentIndex;
          });
        } else {
          dispatch((state) => {
            if (state.imageIndex !== index) {
              state.imageIndex = index;
            }
          });
        }
        thumbnailItemScrollIntoView(index);
      };
    },
    [dispatch, setImageIndex, thumbnailItemScrollIntoView],
  );

  useEffect(() => {
    dispatch((state) => {
      state.thumbnailItemScrollIntoView = thumbnailItemScrollIntoView;
    });
  }, [dispatch, thumbnailItemScrollIntoView]);

  // useEffect(() => {
  //   if (
  //     thumbnailsElementRef.current &&
  //     thumbnailsElementRef.current.children.item(imageIndex)
  //   ) {
  //     const item = thumbnailsElementRef.current.children.item(imageIndex);
  //     item?.scrollIntoView({ inline: "center", block: "nearest" });
  //   }
  // }, [imageIndex]);

  return (
    <div className="flex border-t border-zinc-700" ref={ref}>
      <ul
        className="flex p-2 space-x-2 overflow-x-auto"
        ref={thumbnailsElementRef}
      >
        {imageUrls.map((imageUrl, idx) => (
          <li
            className={cn(
              "flex",
              idx === imageIndex ? "brightness-100" : "brightness-50",
            )}
            key={imageUrl}
          >
            <button onClick={goToImage(idx)}>
              <Picture.Root>
                <Picture.Figure className={cn("w-20 sm:w-32")}>
                  {showSkeleton && <Picture.Skeleton />}
                  <Picture.Img
                    loading={loading}
                    onLoadScaleAnimation={false}
                    src={imageUrl}
                    style={{ objectFit: "cover" }}
                  />
                </Picture.Figure>
              </Picture.Root>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
