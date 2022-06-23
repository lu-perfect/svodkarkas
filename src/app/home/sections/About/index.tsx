import Image from 'next/image';
import Link from "next/link";

import Container from "components/UI/Container";

import features from "./features.data";

import styles from './styles.module.scss';

const AboutSection = () => (
  <section id="about-us" className={styles.root}>
    <Container className={styles.container}>
      <figure className={styles.banner}>
        <Image src="/images/pages/home/about.png" alt="Наш проект" width="629px" height="781px" />
      </figure>

      <div className={styles.wrapper}>
        <p className={styles.subtitle}>О нас</p>

        <h2 className={styles.title}>Загородные коттеджи немецкого качества</h2>

        <p className={styles.text}>
          Мы, ведущая компания в строительстве загородных коттеджей, уже более 7-ми держим стандарт качества.
          <br />
          Наша специализация - каменные дома премиум-класса для постоянного проживания.
          <br />
          Давно хотели построить дом-мечты? Выбирайте проект - остальное за нами!
        </p>

        <ul className={styles.list}>
          {features.map((feature) => (
            <li key={feature.title}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>

              <span>
                {feature.title}
              </span>
            </li>
          ))}
        </ul>

        <p className={styles.tagline}>
          Мы строим только качественные дома и уверены в них.
          На каждый наш дом и все выполненные работы мы даем гарантию 10 лет.
        </p>

        <Link href="/projects">
          <a className={styles.link}>
            Проекты
          </a>
        </Link>
      </div>
    </Container>
  </section>
);
export default AboutSection;
