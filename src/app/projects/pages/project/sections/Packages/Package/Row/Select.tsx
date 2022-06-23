import formatPrice from "utils/formatPrice";

import styles from './styles.module.scss';
import Icon from "../../../../../../../../components/UI/Icon";

export type SelectVariantRowProps = {
  blocks: Array<PackageBlock>;
  price: number;
  variant: 1 | 2;
  setVariant: (variant: 1 | 2) => void;
}

const SelectVariantRow = ({ blocks, price, variant, setVariant } : SelectVariantRowProps) => (
  <div className={`${styles.root} ${styles.custom}`} style={{ gridRow: blocks.length + 2 }}>
    <h4>
      На выбор
    </h4>

    <div className={`${styles.variant}${variant === 1 ? ` ${styles.active}` : ''}`} onClick={() => setVariant(1)}>
      <span className={styles.checkbox}>
        <Icon viewBox="64 64 896 896">
          <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
        </Icon>
      </span>
      <h4>
        Свайно-винтовой фундамент
      </h4>
      <span>
        {formatPrice(price)}
      </span>
    </div>

    <div className={`${styles.variant}${variant === 2 ? ` ${styles.active}` : ''}`} onClick={() => setVariant(2)}>
      <span className={styles.checkbox}>
        <Icon viewBox="64 64 896 896">
          <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
        </Icon>
      </span>
      <h4>
        Железобетонные сваи
      </h4>
      <span>
        {formatPrice(price + 200000)}
      </span>
    </div>
  </div>
);

export default SelectVariantRow;
