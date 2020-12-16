import * as React from "react";
import classNames from "classnames";
import renderSVG from "./renderSVG";

renderSVG();
type SvgProps = Omit<React.HTMLProps<SVGSVGElement>, "size" | "type" | "crossOrigin">;
export interface IconProps extends SvgProps {
  className?: string;
  size?: "xxs" | "xs" | "sm" | "md" | "lg";
  type?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}
const Icon: React.FC<IconProps> = (props) => {
  const { className, size, type, ...properties } = props;
  const classes = classNames("yh-icon", className, `yh-icon-${size}`, `yh-icon-${type}`);
  return (
    <svg className={classes} aria-hidden="true" {...properties}>
      <use xlinkHref={`#${type}`} />
    </svg>
  );
};
Icon.defaultProps = {
  size: "md",
};
export default Icon;
