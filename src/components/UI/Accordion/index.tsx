import { useState } from "react";

import Button from "../Button";
import Icon from "../Icon";

import styles from './styles.module.scss';

export type AccordionProps = {
  title: string;
  description: string;
}

export default function Accordion({ title, description } : AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.root}${isOpen ? ` ${styles.open}` : ''}`}>
      <Button aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className={styles.button}>
        <h3>{title}</h3>
        <Icon width={18} height={18} viewBox="0 0 18 18">
          <rect x="8" width="2" height="18"/>
          <rect y="8" width="18" height="2"/>
        </Icon>
      </Button>

      <p>
        {description}
      </p>
    </div>
  );
}
