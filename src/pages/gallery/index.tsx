import type { NextPage } from 'next';

import Layout from 'components/Layout';

import Content from 'app/gallery/page';

const GalleryPage: NextPage = () => (
  <Layout>
    <Content />
  </Layout>
);

export default GalleryPage;
