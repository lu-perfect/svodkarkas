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

          <footer className="footer-v6">
            <div className="container max-width-lg">
              <div
                className="padding-y-lg border-bottom border-contrast-higher border-opacity-10% margin-bottom-lg margin-bottom-xl@md">
                <div className="flex flex-column gap-xs flex-row@md justify-between@md items-center@md">
                  <div><h1>Be better, be stronger.</h1></div>
                  <div><a className="btn btn--primary" href="#0">Join Our Club</a></div>
                </div>
              </div>
              <div className="margin-bottom-xl">
                <div className="grid gap-lg">
                  <div className="col-6@xs col-3@md">
                    <div className="margin-bottom-lg"><h4 className="margin-bottom-xs text-base@md">Menu</h4>
                      <ul className="grid gap-xs text-sm@md">
                        <li><a className="footer-v6__link" href="#0">The Club</a></li>
                        <li><a className="footer-v6__link" href="#0">Membership</a></li>
                        <li><a className="footer-v6__link" href="#0">Timetable</a></li>
                        <li><a className="footer-v6__link" href="#0">Contact</a></li>
                      </ul>
                    </div>
                    <div><h4 className="margin-bottom-xs text-base@md">Legal</h4>
                      <ul className="grid gap-xs text-sm@md">
                        <li><a className="footer-v6__link" href="#0">Terms</a></li>
                        <li><a className="footer-v6__link" href="#0">Privacy Policy</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6@xs col-3@md"><h4 className="margin-bottom-xs text-base@md">Opening Times</h4>
                    <dl className="grid gap-xs color-contrast-medium text-sm@md max-width-xxxxs width-70%@lg">
                      <div className="flex items-baseline justify-between">
                        <dt>Mon</dt>
                        <dd className="margin-left-xxs">06 AM - 08 PM</dd>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <dt>Tue</dt>
                        <dd className="margin-left-xxs">06 AM - 08 PM</dd>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <dt>Wed</dt>
                        <dd className="margin-left-xxs">09 AM - 08 PM</dd>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <dt>Thu</dt>
                        <dd className="margin-left-xxs">06 AM - 08 PM</dd>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <dt>Fri</dt>
                        <dd className="margin-left-xxs">06 AM - 08 PM</dd>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <dt>Sat</dt>
                        <dd className="margin-left-xxs">09 AM - 08 PM</dd>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <dt>Sun</dt>
                        <dd className="margin-left-xxs">09 AM - 12 PM</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="col-6@xs col-3@md"><h4 className="margin-bottom-xs text-base@md">Connect</h4>
                    <ul className="grid gap-xs text-sm@md">
                      <li><a className="footer-v6__link inline-flex items-center" href="#0"><span
                        className="footer-v6__link-icon" aria-hidden="true"><svg className="icon" viewBox="0 0 16 16"><g><circle
                        cx="12.145" cy="3.892" r="0.96"></circle><path
                        d="M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12z M8,6C6.897,6,6,6.897,6,8 s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z"></path><path
                        d="M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16z M4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z"></path></g></svg> </span><span
                        className="margin-left-xxxs">Instagram</span></a></li>
                      <li><a className="footer-v6__link inline-flex items-center" href="#0"><span
                        className="footer-v6__link-icon" aria-hidden="true"><svg className="icon" viewBox="0 0 16 16"><g><path
                        d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1 C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7 c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3 c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z"></path></g></svg> </span><span
                        className="margin-left-xxxs">Twitter</span></a></li>
                      <li><a className="footer-v6__link inline-flex items-center" href="#0"><span
                        className="footer-v6__link-icon" aria-hidden="true"><svg className="icon" viewBox="0 0 16 16"><g><path
                        d="M15.8,4.8c-0.2-1.3-0.8-2.2-2.2-2.4C11.4,2,8,2,8,2S4.6,2,2.4,2.4C1,2.6,0.3,3.5,0.2,4.8C0,6.1,0,8,0,8 s0,1.9,0.2,3.2c0.2,1.3,0.8,2.2,2.2,2.4C4.6,14,8,14,8,14s3.4,0,5.6-0.4c1.4-0.3,2-1.1,2.2-2.4C16,9.9,16,8,16,8S16,6.1,15.8,4.8z M6,11V5l5,3L6,11z"></path></g></svg> </span><span
                        className="margin-left-xxxs">YouTube</span></a></li>
                      <li><a className="footer-v6__link inline-flex items-center" href="#0"><span
                        className="footer-v6__link-icon" aria-hidden="true"><svg className="icon" viewBox="0 0 16 16"><g><path
                        d="M16,8.048a8,8,0,1,0-9.25,7.9V10.36H4.719V8.048H6.75V6.285A2.822,2.822,0,0,1,9.771,3.173a12.2,12.2,0,0,1,1.791.156V5.3H10.554a1.155,1.155,0,0,0-1.3,1.25v1.5h2.219l-.355,2.312H9.25v5.591A8,8,0,0,0,16,8.048Z"></path></g></svg> </span><span
                        className="margin-left-xxxs">Facebook</span></a></li>
                    </ul>
                  </div>
                  <div className="col-6@xs col-3@md">
                    <div className="text-component margin-bottom-sm"><h4 className="text-base@md">Newsletter</h4><p
                      className="text-sm color-contrast-medium">Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.</p></div>
                    <form className="grid gap-xxxs text-sm@md"><input className="form-control" type="email"
                                                                      placeholder="Your email address"
                                                                      aria-label="Email address" />
                      <button className="btn btn--subtle">Subscribe</button></form>
                  </div>
                </div>
              </div>
              <div className="padding-y-sm border-top border-contrast-higher border-opacity-10%"><p
                className="text-xs color-contrast-medium">©MyCompany</p></div>
            </div>
          </footer>
        </Container>
      </section>
    </Layout>
  )
}

export default ContactPage;
