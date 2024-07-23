"use client";
import { Expand, X } from "lucide-react";
import {
  ImageGalleryMainImage,
  ImageGalleryNavButtons,
  ImageGalleryProps,
  ImageGalleryRoot,
  ImageGalleryThumbnails,
} from "./ImageGallery.primitives";
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTrigger,
} from "./Dialog.primitive";
import React, { useLayoutEffect, useState } from "react";

export function ImageGalleryInline({
  imageUrls,
  fullscreenImageUrls = imageUrls,
  children,
  loading = "lazy",
}: Pick<ImageGalleryProps, "imageUrls"> & {
  fullscreenImageUrls?: string[];
  children?: React.ReactNode;
  loading?: React.ComponentProps<"img">["loading"];
}) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <ImageGalleryRoot
      imageUrls={imageUrls}
      imageIndex={imageIndex}
      setImageIndex={setImageIndex}
    >
      <ImageGalleryMainImage
        // key={imageIndex}
        showSkeleton={true}
        loading={loading}
      />
      <ImageGalleryThumbnails showSkeleton={true} loading={loading} />
      <ImageGalleryNavButtons />
      <FullscreenToggle
        imageUrls={fullscreenImageUrls}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
      />
      {children && (
        <p className="text-2xs text-white text-center p-1 border-t border-zinc-700">
          {children}
        </p>
      )}
    </ImageGalleryRoot>
  );
}

function FullscreenToggle(props: Omit<ImageGalleryProps, "children">) {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [thumbnailsElement, setThumbnailsElement] =
    useState<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (thumbnailsElement) {
      const { height } = thumbnailsElement.getBoundingClientRect();
      setAspectRatio(window.innerWidth / (window.innerHeight - height));
    }
  }, [thumbnailsElement]);

  return (
    <DialogRoot modal>
      <DialogTrigger
        className={
          "hidden xl:flex opacity-50 absolute top-2 right-2 text-white bg-zinc-900/50 z-30 w-8 h-8 sm:w-10 sm:h-10 items-center justify-center"
        }
      >
        <Expand />
      </DialogTrigger>
      <DialogContent className="flex flex-col justify-center items-center">
        <DialogClose
          aria-label="Exit fullscreen view"
          className="fixed z-30 top-2 right-2 bg-zinc-900/50 opacity-50 p-2"
        >
          <X className="h-6 w-6 text-white/90" />
        </DialogClose>
        <ImageGalleryRoot {...props}>
          {aspectRatio !== null && (
            <ImageGalleryMainImage
              aspectRatio={aspectRatio}
              showSkeleton={true}
            />
          )}
          <ImageGalleryThumbnails
            ref={(ref) => setThumbnailsElement(ref)}
            showSkeleton={true}
          />
          <ImageGalleryNavButtons />
        </ImageGalleryRoot>
      </DialogContent>
    </DialogRoot>
  );
}
