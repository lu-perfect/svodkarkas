import type { NextPage } from 'next'

import Layout from 'components/Layout';

import Typography from "components/UI/Typography";
import Container from "components/UI/Container";
import ListItem from "components/UI/ListItem";
import Icon from "components/UI/Icon";
import List from "components/UI/List";
import Box from "components/UI/Box";

import { company } from "config";

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <section className="contacts">
        <Container>
          <Box className="row">
            <Box className="col left">
              <iframe src="https://yandex.ru/map-widget/v1/-/CCUBRHQeHB" width="100%" height="450" frameBorder={0} allowFullScreen />
            </Box>

            <Box className="col right">
              <Typography tag="h2">Контакты</Typography>
              <Typography tag="p">
                Выйдите на станции метро Бутырская, 4 выход, поверните налево и пройдите вниз, до конца улицы, от остановки МФЦ Марьина Роща поверните направо и перейдите дорогу, войдите во второе здание. Пройдите через пропускную систему и поднимитесь по лестнице на этаж 3, войдите в 338 офис.
              </Typography>
              <List>
                <ListItem>
                  <Icon viewBox="64 64 896 896">
                    <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z" />
                  </Icon>

                  <Typography>{company.phone}</Typography>
                </ListItem>
                <ListItem>
                  <Icon viewBox="64 64 896 896">
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
                  </Icon>

                  <Typography>{company.email}</Typography>
                </ListItem>
                <ListItem>
                  <Icon viewBox="0 0 20 20">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </Icon>

                  <Typography>{company.address}</Typography>
                </ListItem>
              </List>
            </Box>
          </Box>

          {/*
          <Box className="form-wrapper">
            <Typography tag="h2" className="title">
              Отправить сообщение
            </Typography>
            <form>
              <Box className="field">
                <Typography tag="h3">Ваше имя</Typography>
                <input type="text" />
              </Box>

              <Box className="field">
                <Typography tag="h3">Ваш телефон <i>*</i></Typography>
                <input type="text" aria-required required />
              </Box>

              <Box className="field">
                <Typography tag="h3">Сообщение</Typography>
                <textarea rows={8} aria-required required />
              </Box>

              <Button type="submit" variant="slider">
                Отправить
              </Button>
            </form>
          </Box>
          */}

        </Container>
      </section>
    </Layout>
  )
}

export default ContactPage;
