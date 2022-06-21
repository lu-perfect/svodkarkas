import type { ReactNode } from "react";

import Button from "components/UI/Button";
import Typography from "components/UI/Typography";
import {MouseEventHandler} from "react";

export type ActionButtonProps = {
  label: string;
  caption: string;
  isMenu?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: ReactNode;
}

const ActionButton = ({ label, caption, icon, onClick, isMenu } : ActionButtonProps) => (
  <Button className={`action-button${isMenu ? ' menu-button' : ''}`} aria-label={label} onClick={onClick}>
    {icon}

    <Typography className="action-button__caption">
      {caption}
    </Typography>
  </Button>
);

export default ActionButton;
