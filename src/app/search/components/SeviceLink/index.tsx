import Icon from "components/UI/Icon";
import styles from './styles.module.scss';
import Link from "next/link";

const ServiceLink = ({ caption, href, description } : { caption: string, href: string, description?: string }) => (
  <Link href={href}>
    <li className={styles.root}>
      <div className={styles.wrapper}>
        <span>{caption}</span>
        {description && <p>{description}</p>}
      </div>
    </li>
  </Link>
);

export default ServiceLink;
