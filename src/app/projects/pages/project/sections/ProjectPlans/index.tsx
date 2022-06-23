import Image from "next/image";

import Container from "components/UI/Container";

import { Gallery, Item } from "react-photoswipe-gallery";

import styles from './styles.module.scss';

export type ProjectPlansSectionProps = {
  project: ProjectViewDTO
}

const ProjectPlansSection = ({ project } : ProjectPlansSectionProps) => (
  <section className={`${styles.root} ${styles[project.slides.plans.length === 2 ? 'two-storey' : 'one-storey']}`}>
    <Container className={styles.container}>
      <Gallery>
        {project.slides.plans.map((slide) => (
          <Item
            key={slide.url}
            original={slide.url}
            width={1024}
            height={768}
          >
            {({ ref, open }) => (
              <figure className={styles.plan} key={slide.url} ref={ref as any}>
                <Image
                  width={1024} height={768}
                  onClick={open}
                  role="button"
                  tabIndex={-1}
                  alt={slide.title}
                  loading="eager"
                  priority
                  src={slide.url} />
              </figure>
            )}
          </Item>
        ))}
        {project.slides.facades.map((slide) => (
          <Item
            key={slide.url}
            original={slide.url}
            width={1024}
            height={768}
          >
            {({ ref, open }) => (
              <figure className={styles.facade} key={slide.url} ref={ref as any}>
                <Image
                  width={1024} height={768}
                  onClick={open}
                  role="button"
                  tabIndex={-1}
                  alt={slide.title}
                  loading="eager"
                  priority
                  src={slide.url} />
              </figure>
            )}
          </Item>
        ))}
      </Gallery>
    </Container>
  </section>
);

export default ProjectPlansSection;
