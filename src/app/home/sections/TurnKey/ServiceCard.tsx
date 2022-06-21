import type { ReactElement } from "react";

import InternalLink from "components/UI/InternalLink";
import Typography from "components/UI/Typography";
import Icon from "components/UI/Icon";
import Box from "components/UI/Box";

export type ServiceCardProps = {
  icon: ReactElement;

  href: string;
  caption: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, caption, href, title, description } : ServiceCardProps) => (
  <Box className="service-card">
    <Box className="icon-wrapper">
      {icon}
    </Box>

    <Typography tag="h3" className="h3 card-title">
      <InternalLink href={href}>
        {title}
      </InternalLink>
    </Typography>

    <Typography tag="p" className="card-text">
      {description}
    </Typography>

    <InternalLink href={href} className="card-link">
      <Typography>
        {caption}
      </Typography>

      <Icon viewBox="0 0 476.213 476.213">
        <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106" />
      </Icon>
    </InternalLink>
  </Box>
);
export default ServiceCard;
