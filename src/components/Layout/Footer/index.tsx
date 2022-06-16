import { company } from "config";

import InternalLink from "components/UI/InternalLink";
import Typography from "components/UI/Typography";
import Container from "components/UI/Container";
import ListItem from "components/UI/ListItem";
import List from "components/UI/List";
import Icon from "components/UI/Icon";
import Link from "components/UI/Link";
import Box from "components/UI/Box";

const Footer = () => {
  return (
    <footer className="footer">
      <Box className="footer-top">
        <Container>
          <Box className="footer-brand">
            <InternalLink href="/" className="logo">
              ООО СК «СВОД-СТРОЙ»
            </InternalLink>

            <Typography tag="p" className="section-text">
              От проекта до дома вашей мечты.
            </Typography>

            <List className="contact-list">
              <ListItem>
                <Link href={`tel:${company.phone}`} className="contact-link">
                  <Icon viewBox="64 64 896 896" style={{ left: '-3px' }} width="1.2em" height="1.2em">
                    <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z" />
                  </Icon>

                  <Typography>{company.phone}</Typography>
                </Link>
              </ListItem>

              <ListItem>
                <InternalLink href={`mailto:${company.email}`} className="contact-link">
                  <Icon viewBox="64 64 896 896">
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
                  </Icon>

                  <Typography>{company.email}</Typography>
                </InternalLink>
              </ListItem>


              <ListItem>
                <small>
                  Все права защищены. Размещенная на сайте информация носит ознакомительный характер, может меняться без предварительного уведомления, не является публичной офертой.
                </small>
              </ListItem>
            </List>
          </Box>

          <Box className="footer-link-box">
            <List className="footer-list">
              <ListItem>
                <Typography tag="p" className="footer-list-title">Компания</Typography>
              </ListItem>

              <ListItem>
                <InternalLink href="/about" className="footer-link">О нас</InternalLink>
              </ListItem>

              <ListItem>
                <InternalLink href="/blog" className="footer-link">Блог</InternalLink>
              </ListItem>

              <ListItem>
                <InternalLink href="/projects" className="footer-link">Проекты</InternalLink>
              </ListItem>

              <ListItem>
                <InternalLink href="/projects/map" className="footer-link">Карта проектов</InternalLink>
              </ListItem>

              <ListItem>
                <InternalLink href="/contacts" className="footer-link">Связаться с нами</InternalLink>
              </ListItem>
            </List>

            <List className="footer-list">
              <ListItem>
                <Typography tag="p" className="footer-list-title">Услуги</Typography>
              </ListItem>

              <ListItem>
                <InternalLink href="#" className="footer-link">Строительство коттеджей</InternalLink>
              </ListItem>

              <ListItem>
                <InternalLink href="#" className="footer-link">Проектирование</InternalLink>
              </ListItem>

              <ListItem>
                <InternalLink href="/credit" className="footer-link">Кредитование</InternalLink>
              </ListItem>

              <ListItem>
                <InternalLink href="/promotions" className="footer-link">Акции</InternalLink>
              </ListItem>
            </List>

            <List className="footer-list">
              <ListItem>
                <Typography tag="p" className="footer-list-title">Заказчикам</Typography>
              </ListItem>

              <ListItem>
                <InternalLink href="/my" className="footer-link">Личный кабинет</InternalLink>
              </ListItem>

              <ListItem>
                <InternalLink href="/my/desires" className="footer-link">Список Желаний</InternalLink>
              </ListItem>

              <ListItem>
                <InternalLink href="/my/orders" className="footer-link">Мои заказы</InternalLink>
              </ListItem>

              <ListItem>
                <InternalLink href="/faq" className="footer-link">Вопрос-Ответ</InternalLink>
              </ListItem>
            </List>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
