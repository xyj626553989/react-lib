import * as React from "react";

type ButtonType = "primary" | "default" | "danger" | "link";

interface Props {
  type?: ButtonType;
}
type NativeProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = Props & NativeProps;

const Button: React.FC<ButtonProps> = ({ type, children, ..._props }) => <a {..._props}>{children}</a>;
Button.defaultProps = {
  type: "primary",
};

export default Button;
