import type { ReactNode } from "react";

import Button from "components/UI/Button";

import styles from './styles.module.scss';

type BannerActionButtonProps = {
  label: string;
  caption: string | number;
  icon: ReactNode;
}

const BannerActionButton = ({ label, caption, icon } : BannerActionButtonProps) => (
  <Button className={styles.root} aria-label={label}>
    {icon}

    <span>
      {caption}
    </span>
  </Button>
);

export default BannerActionButton;
