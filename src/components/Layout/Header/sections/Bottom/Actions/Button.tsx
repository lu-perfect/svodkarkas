import type { ReactNode } from "react";

import Button from "components/UI/Button";
import Typography from "components/UI/Typography";

type ActionButtonProps = {
  label: string;
  caption: string;
  isMenu?: boolean;
  icon: ReactNode;
}

const ActionButton = ({ label, caption, icon, isMenu } : ActionButtonProps) => (
  <Button className={`action-button${isMenu ? ' menu-button' : ''}`} aria-label={label}>
    {icon}

    <Typography>
      {caption}
    </Typography>
  </Button>
);

export default ActionButton;
