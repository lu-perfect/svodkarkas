import Button from "components/UI/Button";

import formatPrice from "utils/formatPrice";

import styles from './styles.module.scss';

export type PackageFooterProps = { price: number };

const PackageFooter = ({ price } : PackageFooterProps) => (
  <div className={styles.root}>
    <h4 className={styles.price}>
      {formatPrice(price)}
    </h4>

    <Button variant="outline" className={styles.button}>
      Заказать
    </Button>
  </div>
);

export default PackageFooter;
