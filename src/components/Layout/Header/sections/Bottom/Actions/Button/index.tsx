import type { ReactNode, MouseEventHandler } from "react";

import Button from "components/UI/Button";

import styles from './styles.module.scss';

export type ActionButtonProps = {
  label: string;
  caption: string;
  isMenu?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: ReactNode;
}

const ActionButton = ({ label, caption, icon, onClick, isMenu } : ActionButtonProps) => (
  <Button className={`${styles.root}${isMenu ? ` ${styles.menu}` : ''}`} aria-label={label} onClick={onClick}>
    {icon}

    <span>
      {caption}
    </span>
  </Button>
);

export default ActionButton;
