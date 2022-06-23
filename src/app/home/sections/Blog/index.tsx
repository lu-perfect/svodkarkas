import Container from "components/UI/Container";

import BlogCard from "./Card";

import articles from "./articles.data";

import styles from './styles.module.scss';

const BlogSection = () => (
  <section id="blog" className={styles.root}>
    <Container>
      <p className="subtitle">Блог</p>

      <h2 className="title">Последние новости</h2>

      <ul className={styles.wrapper}>
        {articles.map((article) => (
          <li key={article.id}>
            <BlogCard {...article} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
export default BlogSection;
