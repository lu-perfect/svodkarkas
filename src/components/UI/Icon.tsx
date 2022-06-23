import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export const Icon = ({
  children,
  viewBox,
  className,
  fill = 'currentColor',
  'aria-hidden': ariaHidden = true,
  focusable = false,
  width = '1em', height = '1em',
  ...rest
} : IconProps) => (
  <svg
    {...rest}
    className={`icon${className ? ` ${className}` : ''}`} viewBox={viewBox}
    width={width} height={height}
    fill={fill}
    aria-hidden={ariaHidden}
    focusable={focusable}
  >
    {children}
  </svg>
);
export default Icon;
