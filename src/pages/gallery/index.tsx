import type { NextPage } from 'next'

import Layout from 'components/Layout';

import Container from "components/UI/Container";
import Typography from "components/UI/Typography";
import Box from "components/UI/Box";

const Slide = ({ url, title } : { url: string, title: string }) => (
  <figure className="gallery-item">
    <div className="cover" style={{ backgroundImage: `url(${url});` }} />
    <figcaption>
      {title}
    </figcaption>
  </figure>
);

const data = [
  { title: 'Семейный', url: '/images/gallery/1.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Семейный', url: '/images/gallery/1.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Семейный', url: '/images/gallery/1.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Семейный', url: '/images/gallery/1.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Сидней', url: '/images/gallery/2.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
  { title: 'Рейкан', url: '/images/gallery/3.jpg' },
  { title: 'Аризона', url: '/images/gallery/4.jpg' },
]

const GalleryPage: NextPage = () => {
  return (
    <Layout>
      <section className="gallery">
        <Container>

          <Typography tag="h1" className="h2 title">
            Галерея
          </Typography>

          <Box className="gallery-container">
            {data.map((item, i) => (
              <Slide key={item.title + i} title={item.title} url={item.url} />
            ))}
          </Box>
        </Container>
      </section>
    </Layout>
  )
}

export default GalleryPage;
