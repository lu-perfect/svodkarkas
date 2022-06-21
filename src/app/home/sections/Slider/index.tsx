import { useRouter } from "next/router";

import Carousel from "components/Carousel";

import Typography from "components/UI/Typography";
import Container from "components/UI/Container";
import Button from "components/UI/Button";
import Box from "components/UI/Box";
import { Gallery, Item } from "react-photoswipe-gallery";

const SliderSection = ({ images } : { images: Array<Array<string>> }) => {
  const router = useRouter();

  return (
    <section id="gallery">
      <Container>
        <Typography tag="h2" className="h2 title">
          Построенные дома
        </Typography>

        <Carousel>
          <Gallery>
            {images.map((e) => (
              <Item
                key={e[0]}
                original={e[0]} // 1024/768
                width={1024}
                height={768}
              >
                {({ ref, open }) => (
                  <Box>
                    <img
                      width={1024} height={768}
                      ref={ref as any}
                      role="button"
                      tabIndex={-1}
                      alt={e[0]}
                      loading="lazy"
                      onClick={open}
                      src={e[0]} />
                  </Box>
                )}
              </Item>
            ))}
          </Gallery>
        </Carousel>

        <Box className="button-wrapper">
          <Button variant="slider" onClick={() => router.push('/gallery')}>
            Все фото
          </Button>
        </Box>
      </Container>
    </section>
  );
}
export default SliderSection;
