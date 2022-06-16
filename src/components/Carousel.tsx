import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Button from "./UI/Button";
import Icon from "./UI/Icon";
import Box from "./UI/Box";

const Carousel = ({ children }: PropsWithChildren<{}>) => {
  const ref = useRef<HTMLDivElement>(null)

  const [childrenWidths, setChildrenWidths] = useState<Array<number>>([]);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (ref.current) {
      let widths: Array<number> = [];

      for (let i = 0; i < ref.current.children.length; i += 1) {
        widths.push(ref.current.children.item(i)?.scrollWidth!);
      }

      setChildrenWidths(widths);
    }
  }, []);

  const handleCarouselAction = (where: 'next' | 'prev') => {
    let value = where === 'next'
      ? current === childrenWidths.length - 1 ? 1 : current + 1
      : current === 1 ? childrenWidths.length - 1 : current - 1;

    let sum = 0;

    for (let i = 0; i < value - 1; i += 1) {
      sum += childrenWidths[i];
    }

    setCurrent(value);
    ref.current!.style.transform = `translateX(-${sum}px)`;
  }

  return (
    <Box className="carousel">
      <div className="carousel-container" ref={ref}>
        {children}
      </div>

      <Box className="controls">
        <Button onClick={() => handleCarouselAction('prev')}>
          <Icon width={16} height={32} viewBox="0 0 49.656 49.656" style={{ transform: 'rotate(180deg)' }}>
            <polygon points="14.535,48.242 11.707,45.414 32.292,24.828 11.707,4.242 14.535,1.414 37.949,24.828" />
            <path d="M14.535,49.656l-4.242-4.242l20.585-20.586L10.293,4.242L14.535,0l24.829,24.828L14.535,49.656z M13.121,45.414l1.414,1.414l22-22l-22-22l-1.414,1.414l20.585,20.586L13.121,45.414z" />
          </Icon>
        </Button>

        <Button onClick={() => handleCarouselAction('next')}>
          <Icon width={16} height={32} viewBox="0 0 49.656 49.656">
            <polygon points="14.535,48.242 11.707,45.414 32.292,24.828 11.707,4.242 14.535,1.414 37.949,24.828" />
            <path d="M14.535,49.656l-4.242-4.242l20.585-20.586L10.293,4.242L14.535,0l24.829,24.828L14.535,49.656z M13.121,45.414l1.414,1.414l22-22l-22-22l-1.414,1.414l20.585,20.586L13.121,45.414z" />
          </Icon>
        </Button>
      </Box>
    </Box>
  )
}

export default Carousel;
