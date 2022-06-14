import type { ReactNode } from "react";

import Button from "components/UI/Button";
import Typography from "components/UI/Typography";

type BannerActionButtonProps = {
  label: string;
  caption: string | number;
  icon: ReactNode;
}

const BannerActionButton = ({ label, caption, icon } : BannerActionButtonProps) => (
  <Button className="action-button" aria-label={label}>
    {icon}

    <Typography>
      {caption}
    </Typography>
  </Button>
);

export default BannerActionButton;
