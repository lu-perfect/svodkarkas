import { useContext } from "react";
import ImageViewerContext from "./context";

const useImageViewer = () => useContext(ImageViewerContext);
export default useImageViewer;
