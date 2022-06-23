import type { GetStaticProps, NextPage } from 'next';

import * as math from "mathjs"

import Layout from "components/Layout";

import type { ProjectPageProps } from 'app/projects/pages/project/page';

import Content from 'app/projects/pages/project/page';

import data from "data";
import * as fs from "fs";

const ProjectPage: NextPage<ProjectPageProps> = (props) => {
  return (
    <Layout>
      <Content {...props} />
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: data.projects.map((project) => ({ params: { id: project.id } })),
    fallback: false
  };
}

function fileExist(path: string): Promise<boolean> {
  return new Promise(function (resolve, reject) {
    fs.stat(path, function (err, stats) {
      if (err) {
        return resolve(false);
      }
      return resolve(true);
    });
  })
}

async function tryGetImagePath(path: string): Promise<string | boolean> {
  if (await fileExist(`public/${path}.jpg`)) {
    return `/${path}.jpg`;
  }
  if (await fileExist(`public/${path}.webp`)) {
    return `/${path}.webp`;
  }
  if (await fileExist(`public/${path}.png`)) {
    return `/${path}.png`;
  }
  return false;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  if (typeof id !== 'string') {
    return {
      notFound: true,
    }
  }

  let candidate = data.projects.find((e) => e.id === id);
  if (candidate === undefined) {
    return {
      notFound: true,
    }
  }

  const part: Pick<ProjectViewDTO, 'slides'> = {
    slides: {
      covers: [],
      facades: [],
      plans: [],
    }
  };

  for (let i = 1; i <= candidate.covers; i += 1) {
    const title = `${candidate.title} #${i}`;
    const url = await tryGetImagePath(`images/projects/${candidate.id}/covers/cover-${i}`);
    if (typeof url === 'string') {
      part.slides.covers.push({ title, url, objectFit: 'cover' });
    }
  }
  for (let i = 1; i <= candidate.facades; i += 1) {
    const title = `Фасад № ${i}`;
    const url = await tryGetImagePath(`images/projects/${candidate.id}/facades/facade-${i}`);
    if (typeof url === 'string') {
      part.slides.facades.push({ title, url });
    }
  }
  for (let i = 1; i <= 2; i += 1) {
    const title = `Этаж № ${i}`;
    const url = await tryGetImagePath(`images/projects/${candidate.id}/plans/floor-${i}`);
    if (typeof url === 'string') {
      part.slides.plans.push({ title, url });
    }
  }

  return {
    props: {
      project: {
        ...candidate,
        ...part,
        terraceAndBalconyArea: math.format(
          math.add(candidate.area.terrace ?? 0, candidate.area.balcony ?? 0), { precision: 14 }
        ),
        minPrice: (Math.ceil(candidate.prices[0] / 100000) * 100000) / 1000000,
        size: {
          x: candidate.size.x.toFixed(2),
          y: candidate.size.y.toFixed(2)
        }
      }
    },
  }
}

export default ProjectPage;
