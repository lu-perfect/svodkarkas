import Typography from "components/UI/Typography";
import Container from "components/UI/Container";
import ListItem from "components/UI/ListItem";
import List from "components/UI/List";

import BlogCard from "components/cards/Blog";

const articles = [
  { id: '1', title: 'Ипотека для IT-специалистов', cover: 'https://m.terem-pro.ru/upload/iblock/9c3/9c3e92f222207624eab42a02662c5c62.jpg' },
  { id: '2', title: 'Ипотека до 30 000 000 рублей без подтверждения дохода', cover: 'https://m.terem-pro.ru/upload/iblock/923/92333ce4b33a8bac2052e98038400211.jpg' },
  { id: '3', title: 'График работы выставочного комплекса на время майских праздников', cover: 'https://m.terem-pro.ru/upload/iblock/3d3/3d38daf2b96f12e397e633a3c05d510e.jpeg' },
]

const BlogSection = () => (
  <section className="blog">
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
