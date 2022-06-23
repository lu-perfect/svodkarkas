import type { ReactElement } from "react";

import Link from "next/link";

import Icon from "components/UI/Icon";

import styles from './styles.module.scss';

export type ServiceCardProps = {
  icon: ReactElement;

  href: string;
  caption: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, caption, href, title, description } : ServiceCardProps) => (
  <div className={styles.root}>
    <div className={styles.iconWrapper}>
      {icon}
    </div>

    <h3 className={styles.title}>
      <Link href={href}>
        <a>
          {title}
        </a>
      </Link>
    </h3>

    <p className={styles.text}>
      {description}
    </p>

    <Link href={href}>
      <a className={styles.link}>
        <span>
          {caption}
        </span>

        <Icon viewBox="0 0 476.213 476.213">
          <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106" />
        </Icon>
      </a>
    </Link>
  </div>
);
export default ServiceCard;
