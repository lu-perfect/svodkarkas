import useImageViewer from "../store/ImageViewer/hooks";

const Slide = ({ url, title } : { url: string, title?: string }) => {
  const { openImage } = useImageViewer();

  return (
    <figure className="gallery-item">
      <div className="cover" onClick={() => openImage(url, title)} role="button" tabIndex={-1} style={{ backgroundImage: `url(${url})` }} />
      <figcaption>
        {title}
      </figcaption>
    </figure>
  );
}

export default Slide;
