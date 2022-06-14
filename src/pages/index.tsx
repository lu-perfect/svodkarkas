import type { NextPage } from 'next';

import Layout from 'components/Layout';

import OurProjectsSection from "components/Home/sections/OurProjects";
import TurnKeySection from "components/Home/sections/TurnKey";
import SliderSection from "components/Home/sections/Slider";
import OfferSection from "components/Home/sections/Offer";
import AboutSection from "components/Home/sections/About";
import BlogSection from "components/Home/sections/Blog";
import HeroSection from 'components/Home/sections/Hero';
import CTASection from 'components/Home/sections/CTA';

const HomePage: NextPage = () => (
  <Layout>
    <HeroSection/>

    <OurProjectsSection/>

    <SliderSection/>

    <AboutSection/>

    <TurnKeySection/>

    <OfferSection />

    <BlogSection />

    <CTASection />
  </Layout>
);
export default HomePage;
