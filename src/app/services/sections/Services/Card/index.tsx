import type { PropsWithChildren } from "react";

import styles from './styles.module.scss';

export type ServiceItemProps = PropsWithChildren<{
  filename: string;
  label: string;
}>

const ServiceCard = ({ filename, label, children } : ServiceItemProps) => (
  <div id={filename} className={styles.root}>
    <picture>
      <source srcSet={`/images/pages/services/${filename}.jpg`} type="image/jpeg" />
      <img title={label} alt={label} />
    </picture>
    <div className={styles.info}>
      <h2>{label}</h2>
      {children}
    </div>
  </div>
);
export default ServiceCard;
