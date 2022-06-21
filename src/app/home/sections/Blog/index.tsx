import Typography from "components/UI/Typography";
import Container from "components/UI/Container";
import ListItem from "components/UI/ListItem";
import List from "components/UI/List";

import BlogCard from "./Card";

import articles from "./articles.data";

const BlogSection = () => (
  <section id="blog">
    <Container>
      <Typography tag="p" className="subtitle">Блог</Typography>

      <Typography tag="h2" className="h2 title">Последние новости</Typography>

      <List className="blog-list">
        {articles.map((article) => (
          <ListItem key={article.id}>
            <BlogCard {...article} />
          </ListItem>
        ))}
      </List>
    </Container>
  </section>
);
export default BlogSection;
