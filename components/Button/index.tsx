import * as React from "react";
import debounce from "lodash/debounce";
import classNames from "classnames";

type ButtonType = "primary" | "default" | "gradient";

interface Props {
  type?: ButtonType;
  className?: string;
  disabled?: boolean;
  wait?: number;
  debounce?: boolean;
}
type NativeProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonProps = Props & NativeProps;
const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled,
  className,
  onClick,
  wait,
  debounce: debounceBoon,
  ..._props
}) => {
  const classnames = classNames("yh-button", className, {
    [`yh-button-${type}`]: !disabled,
    "yh-button-disabled": disabled,
  });
  /**
   * 防抖
   */
  const HandleClick = debounceBoon && onClick ? debounce(onClick, wait, { leading: true }) : onClick;
  return (
    <a className={classnames} {..._props} onClick={disabled ? undefined : HandleClick}>
      {children}
    </a>
  );
};
Button.defaultProps = {
  type: "primary",
  wait: 1000,
};

export default Button;
