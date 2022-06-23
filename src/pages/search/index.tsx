import type { NextPage } from 'next';

import Layout from 'components/Layout';

import Content from 'app/search/page';

const SearchPage: NextPage = () => (
  <Layout>
    <Content />
  </Layout>
);

export default SearchPage;
