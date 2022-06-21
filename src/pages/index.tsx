import type { NextPage, GetStaticProps } from 'next'

import Layout from 'components/Layout';

import type { HomePageProps } from 'app/home/page';
import Content from 'app/home/page';
import {mainProjects} from "../data/projects";
import getProjectTags from "../utils/getProjectTags";
import {gallery} from "../data/gallery";

const HomePage: NextPage<HomePageProps> = (props) => (
  <Layout>
    <Content {...props} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => ({
    props: {
        projects: mainProjects.map((project) => ({
            ...project,
            tags: getProjectTags(project)
        })),
        images: gallery.home.map((image) =>
          Array.from(Array(image.count).keys()).map((e) => `/images/gallery/${image.id}/${e + 1}.jpg`))
    },
})


export default HomePage;
