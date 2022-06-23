import Container from "components/UI/Container";

import data from "data";

import Package from "./Package";

import styles from './styles.module.scss';

export type PackagesSectionProps = {
  project: ProjectViewDTO
}

const PackagesSection = ({ project } : PackagesSectionProps) => (
  <section className={styles.root}>
      <Container>
        <h2 className="title">
          Комплектации
        </h2>

        <div className={styles.grid}>
          <Package price={project.prices[0]} title={data.packages.titles[0]} blocks={data.packages.blocks} index={0} />
          <Package price={project.prices[1]} title={data.packages.titles[1]} blocks={data.packages.blocks} index={1} />
          <Package price={project.prices[2]} title={data.packages.titles[2]} blocks={data.packages.blocks} index={2} />
        </div>
      </Container>
    </section>
);

export default PackagesSection
