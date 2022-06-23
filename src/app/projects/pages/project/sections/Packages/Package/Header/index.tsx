import styles from './styles.module.scss';

export type PackageHeaderProps = { title: string };

const PackageHeader = ({ title } : PackageHeaderProps) => (
  <div className={styles.root}>
    <span>Комплектация</span>
    <h3>«{title}»</h3>
  </div>
);

export default PackageHeader;
