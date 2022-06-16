import useImageViewer from "store/ImageViewer/hooks";
import Box from "components/UI/Box";
import Typography from "./UI/Typography";
import {useEffect} from "react";

const ImageViewer = () => {
  const { src, title, isOpen, closeImageViewer } = useImageViewer();

  useEffect(() => {

  }, [src, title]);

  return (
    <Box id="image-viewer" className={isOpen ? 'opened' : ''}>
      <span className="close" onClick={closeImageViewer}>&times;</span>
      <div className="overlay" onClick={closeImageViewer} />

      {title && (
        <Typography tag="h2">
          {title}
        </Typography>
      )}

      <Box id="image-viewer-content">
        <img src={src} />
      </Box>

      {isOpen && (
        <style>{`
          body { 
            overflow: hidden; 
          }
        `}</style>
      )}

      <Box className="controls">

      </Box>
    </Box>
  );
}

export default ImageViewer;
