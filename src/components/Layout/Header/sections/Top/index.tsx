import { company } from "config";

import Container from "components/UI/Container";
import Wrapper from "components/UI/Wrapper";
import Icon from "components/UI/Icon";
import Button from "components/UI/Button";
import List from "components/UI/List";

import HeaderLink from "./Link";
import SocialLink from "./SocialLink";

const TopSection = () => (
  <section className="header_top">
    <Container>

      <List className="link-list">
        <HeaderLink
          href={`mailto:${company.email}`}
          icon={(
            <Icon viewBox="64 64 896 896">
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
            </Icon>
          )}
          caption={company.email}
        />

        <HeaderLink
          target="_blank"
          rel="noreferrer"
          href="https://yandex.ru/maps/-/CCUJVPUnCC"
          icon={(
            <Icon viewBox="0 0 20 20">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
              <circle cx="12" cy="9" r="2.5" />
            </Icon>
          )}
          caption={company.address}
          tag="address"
        />
      </List>

      <Wrapper>
        <List className="social-link-list">
          {company.socials.map((social) => (
            <SocialLink id={social.id} key={social.id} href={social.href} />
          ))}
        </List>

        <Button>
          Построить Дом
        </Button>
      </Wrapper>
    </Container>
  </section>
);
export default TopSection;
