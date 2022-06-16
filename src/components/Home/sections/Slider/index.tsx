import Router from "next/router";

import Typography from "components/UI/Typography";
import Container from "components/UI/Container";
import Button from "components/UI/Button";
import Box from "components/UI/Box";

import Slider from "components/Slider";
import Carousel from "components/Carousel";

const SliderSection = () => (
  <section className="slider-gallery">
    <Container>
      <Typography tag="h2" className="h2 title">
        Построенные дома
      </Typography>

      <Carousel>
        <Box>
          <img src="/images/gallery/2.jpg" alt="" />
        </Box>
        <Box>
          <img src="/images/gallery/3.jpg" alt="" />
        </Box>
        <Box>
          <img src="/images/gallery/4.jpg" alt="" />
        </Box>
        <Box>
          <img src="/images/gallery/1.jpg" alt="" />
        </Box>
      </Carousel>

      <Box className="button-wrapper">
        <Button variant="slider" onClick={() => Router.push('/gallery')}>
          Все фото
        </Button>
      </Box>
    </Container>
  </section>
);
export default SliderSection;
