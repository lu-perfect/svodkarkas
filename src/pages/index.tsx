import type { NextPage, GetStaticProps } from 'next';

import Layout from 'components/Layout';

import getProjectTags from "utils/getProjectTags";

import OurProjectsSection from "components/Home/sections/OurProjects";
import TurnKeySection from "components/Home/sections/TurnKey";
import SliderSection from "components/Home/sections/Slider";
import OfferSection from "components/Home/sections/Offer";
import AboutSection from "components/Home/sections/About";
import BlogSection from "components/Home/sections/Blog";
import HeroSection from 'components/Home/sections/Hero';
import CTASection from 'components/Home/sections/CTA';

import { mainProjects } from "data/projects";

const HomePage: NextPage<{ projects: Array<Project> }> = ({ projects }) => (
  <Layout>
    <HeroSection/>

    <OurProjectsSection projects={projects} />

    <SliderSection/>

    <AboutSection/>

    <TurnKeySection/>

    <OfferSection />

    <BlogSection />

    <CTASection />
  </Layout>
);


export const getStaticProps: GetStaticProps = async () => ({
    props: {
        projects: mainProjects.map((project) => ({
            ...project,
            tags: getProjectTags(project)
        }))
    },
})


export default HomePage;
