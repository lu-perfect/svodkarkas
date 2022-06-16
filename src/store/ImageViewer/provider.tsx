import type { PropsWithChildren } from "react";
import { useState } from "react";

import ImageViewerContext from "./context";

export default function ImageViewerProvider({ children } : PropsWithChildren<{}>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [src, setSrc] = useState<string>('');

  function openImage(newSrc: string, newTitle: string = ''): void {
    setTitle(newTitle);
    setSrc(newSrc);
    setIsOpen(true);
  }

  function closeImageViewer(): void {
    setSrc('');
    setIsOpen(false);
  }

  return (
    <ImageViewerContext.Provider
      value={{ openImage, closeImageViewer, isOpen, title, src }}
    >
      {children}
    </ImageViewerContext.Provider>
  );
}
