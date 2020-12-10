import * as React from "react";
import classNames from "classnames";

type ButtonType = "primary" | "default" | "gradient";

interface Props {
  type?: ButtonType;
  className?: string;
  disabled?: boolean;
}
type NativeProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = Props & NativeProps;

const Button: React.FC<ButtonProps> = ({ type, children, disabled, className, onClick, ..._props }) => {
  const classnames = classNames("yh-button", className, {
    [`yh-button-${type}`]: !disabled,
    "yh-button-disabled": disabled,
  });

  return (
    <a className={classnames} {..._props} onClick={disabled ? undefined : onClick}>
      {children}
    </a>
  );
};
Button.defaultProps = {
  type: "primary",
};

export default Button;
