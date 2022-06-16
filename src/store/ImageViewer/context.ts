import { createContext } from "react";

const ImageViewerContext = createContext<{
  openImage: (src: string, title?: string) => void;
  closeImageViewer: () => void;
  isOpen: boolean;
  title: string;
  src: string;
}>({
  openImage: () => {},
  closeImageViewer: () => {},
  isOpen: false,
  title: '',
  src: ''
});

export default ImageViewerContext;
