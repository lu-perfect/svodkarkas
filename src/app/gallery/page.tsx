import type { NextPage } from 'next'
import Image from 'next/image';

import Container from "components/UI/Container";

import { gallery } from "data/gallery";

import { Gallery, Item } from 'react-photoswipe-gallery';

import styles from './styles.module.scss';

const GalleryPage: NextPage = () => (
  <section className={styles.root}>
    <Container>

      <h1 className="title">
        Галерея
      </h1>

      <div className={styles.grid}>
        <Gallery>
          {gallery.images.map((item) => (
            <Item
              key={item.id}
              original={`/images/gallery/${item.id}/1.jpg`} // 1024/768
              width={1024}
              height={768}
            >
              {({ ref, open }) => (
                <figure className={styles.item} ref={ref as any}>
                  <Image
                    width={1024} height={768}
                    role="button"
                    tabIndex={-1}
                    alt={item.id}
                    loading="lazy"
                    onClick={open}
                    loader={({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`}
                    src={`/images/gallery/${item.id}/1.jpg`} />
                </figure>
              )}
            </Item>
          ))}
        </Gallery>
      </div>
    </Container>
  </section>
);

export default GalleryPage;
