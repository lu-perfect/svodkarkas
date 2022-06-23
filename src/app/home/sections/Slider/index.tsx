import Image from "next/image";

import { useRouter } from "next/router";

import Carousel from "app/home/sections/Slider/Carousel";

import Container from "components/UI/Container";
import Button from "components/UI/Button";

import { Gallery, Item } from "react-photoswipe-gallery";

import styles from './styles.module.scss'

const SliderSection = ({ images } : { images: Array<Array<string>> }) => {
  const router = useRouter();

  return (
    <section id="gallery" className={styles.root}>
      <Container>
        <h2 className="title">
          Построенные дома
        </h2>

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
                  <div ref={ref as any}>
                    <Image
                      width={1024} height={768}
                      role="button"
                      tabIndex={-1}
                      loading="eager"
                      priority
                      alt={e[0]}
                      onClick={open}
                      src={e[0]} />
                  </div>
                )}
              </Item>
            ))}
          </Gallery>
        </Carousel>

        <div className={styles.buttonWrapper}>
          <Button variant="slider" onClick={() => router.push('/gallery')}>
            Все фото
          </Button>
        </div>
      </Container>
    </section>
  );
}
export default SliderSection;
