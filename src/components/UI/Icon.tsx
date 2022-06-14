import type { PropsWithChildren } from "react";
import {CSSProperties} from "react";

type IconProps = {
  viewBox: string;

  className?: string;
  style?: CSSProperties;

  fill?: string;
  stroke?: string;

  width?: string | number;
  height?: string | number;
}

export const Icon = ({ children, viewBox, className, style, fill = 'currentColor', stroke, width = '1em', height = '1em' } : PropsWithChildren<IconProps>) => (
  <svg
    className={`icon${className ? ` ${className}` : ''}`} viewBox={viewBox}
    width={width} height={height}
    fill={fill}
    style={style}
    stroke={stroke}
    aria-hidden="true" focusable="false">
    {children}
  </svg>
);
export default Icon;
