import PackageRowList from "./List";

import styles from './styles.module.scss';

export type PackageRowProps = Omit<PackageBlock, 'id'> & { i: number, index: number }

const PackageRow = ({ i, title, paragraphs, index } : PackageRowProps) => (
  <div className={styles.root} style={{ gridRow: i + 2 }}>
    <h4>
      {title}
    </h4>

    <PackageRowList paragraphs={paragraphs} index={index} />
  </div>
);

export default PackageRow;
