import Link from "next/link";

import ContactsList from "./ContactsList";

import styles from './styles.module.scss';

import config from "config";

const Brand = () => (
  <div className={styles.root}>
    <Link href="/">
      <a>
        {config.company.entity}
      </a>
    </Link>

    <p>
      От проекта до дома вашей мечты.
    </p>

    <ContactsList />
  </div>
);

export default Brand;
