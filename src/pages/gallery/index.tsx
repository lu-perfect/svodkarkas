import type { NextPage } from 'next'

import Layout from 'components/Layout';

import Container from "components/UI/Container";
import Typography from "components/UI/Typography";


import { gallery } from "data/gallery";

import { Gallery, Item } from 'react-photoswipe-gallery';
import Box from "../../components/UI/Box";

const GalleryPage: NextPage = () => (
  <Layout>
    <section className="gallery">
      <Container>

        <Typography tag="h1" className="h2 title">
          Галерея
        </Typography>

        <Box className="gallery-container">
          <Gallery>
            {gallery.images.map((item) => (
              <Item
                key={item.id}
                original={`/images/gallery/${item.id}/1.jpg`} // 1024/768
                width={1024}
                height={768}
              >
                {({ ref, open }) => (
                  <figure className="gallery-item">
                    <img
                      width={1024} height={768}
                      ref={ref as any}
                      className="cover"
                      role="button"
                      tabIndex={-1}
                      alt={item.id}
                      loading="lazy"
                      onClick={open}
                      src={`/images/gallery/${item.id}/1.jpg`} />
                  </figure>
                )}
              </Item>
            ))}
          </Gallery>
        </Box>
      </Container>
    </section>
  </Layout>
);

export default GalleryPage;
