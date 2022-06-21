import config from "config";

import Container from "components/UI/Container";

import InternalLink from "components/UI/InternalLink";
import Typography from "components/UI/Typography";

import ContactsList from "./ContactsList";
import Widget from "./Widget";

import widgets from "./widgets.data";


const Footer = () => (
  <footer className="footer">
    <Container className="footer__container">
      <div className="footer__brand">
        <InternalLink href="/" className="footer__brand-logo">
          {config.company.entity}
        </InternalLink>

        <Typography tag="p" className="footer__brand-tagline">
          От проекта до дома вашей мечты.
        </Typography>

        <ContactsList />
      </div>

      <div className="footer__widgets">
        {widgets.map((widget) => (
          <Widget key={widget.title} {...widget} />
        ))}
      </div>
    </Container>
  </footer>
);

export default Footer;
