import { useState } from "react";

import Button from "components/UI/Button";
import Icon from "components/UI/Icon";
import Box from "components/UI/Box";

const Slider = ({ slides } : { slides: Array<string> }) => {
  const [slide, setSlide] = useState(1);

  return (
    <Box className="slider-container">
      <Box className="slider" style={{ transform: `translateX(-${(slide - 1) * 100}%)` }}>
        {slides.map((slide) => (
          <Box key={slide}>
            <img src={slide} alt={slide} />
          </Box>
        ))}
      </Box>

      <Box className="controls">
        <Button onClick={() => setSlide(slide === 1 ? slides.length : slide - 1)}>
          <Icon width={16} height={32} viewBox="0 0 49.656 49.656" style={{ transform: 'rotate(180deg)' }}>
            <polygon points="14.535,48.242 11.707,45.414 32.292,24.828 11.707,4.242 14.535,1.414 37.949,24.828" />
            <path d="M14.535,49.656l-4.242-4.242l20.585-20.586L10.293,4.242L14.535,0l24.829,24.828L14.535,49.656z M13.121,45.414l1.414,1.414l22-22l-22-22l-1.414,1.414l20.585,20.586L13.121,45.414z" />
          </Icon>
        </Button>

        <Button onClick={() => setSlide(slide === slides.length ? 1 : slide + 1)}>
          <Icon width={16} height={32} viewBox="0 0 49.656 49.656">
            <polygon points="14.535,48.242 11.707,45.414 32.292,24.828 11.707,4.242 14.535,1.414 37.949,24.828" />
            <path d="M14.535,49.656l-4.242-4.242l20.585-20.586L10.293,4.242L14.535,0l24.829,24.828L14.535,49.656z M13.121,45.414l1.414,1.414l22-22l-22-22l-1.414,1.414l20.585,20.586L13.121,45.414z" />
          </Icon>
        </Button>
      </Box>
    </Box>
  );
}
export default Slider;
