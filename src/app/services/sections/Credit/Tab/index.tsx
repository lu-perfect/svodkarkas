import Image from "next/image";

import styles from './styles.module.scss';

const BankTab = ({ title, current, filename, onClick } : { title: string, current: any, filename: string, onClick: () => void }) => (
  <button type="button" role="tab" aria-selected={current.filename === filename} tabIndex={-1} onClick={onClick} className={`${styles.button}${current.filename === filename ? ` ${styles.active}` : ''}`}>
    <Image width={100} height={80}  alt={title} src={`/images/banks/${filename}.png`} />
  </button>
);
export default BankTab;
