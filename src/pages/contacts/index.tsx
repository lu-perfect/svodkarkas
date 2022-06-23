import type { NextPage } from 'next'

import Layout from 'components/Layout';

import Content from 'app/contacts/page';

const ContactPage: NextPage = () => (
  <Layout>
    <Content />
  </Layout>
);

export default ContactPage;
