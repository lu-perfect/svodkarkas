import TurnKeySection from "./sections/TurnKey";
import AboutSection from "./sections/About";
import HeroSection from "./sections/Hero";
import CTASection from "./sections/CTA";
import BlogSection from "./sections/Blog";
import OfferSection from "./sections/Offer";
import SliderSection from "./sections/Slider";
import OurProjectsSection from "./sections/OurProjects";

export type HomePageProps = {
  images: Array<Array<string>>;
  projects: Array<Project>;
}

export default function HomePage({ images, projects } : HomePageProps) {
  return (
    <>
      <HeroSection />

      <OurProjectsSection projects={projects} />

      <SliderSection images={images} />

      <AboutSection />

      <TurnKeySection />

      <OfferSection />

      <BlogSection />

      <CTASection />
    </>
  );
}
