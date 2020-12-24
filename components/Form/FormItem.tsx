import * as React from "react";
import { Toast } from "antd-mobile";
import { BaseRule, InputType } from "./Propstypes";
import formContext from "./FormContext";

export interface FormItemProps {
  name?: string;
  type?: InputType;
  rule?: BaseRule;
}

const pattern = {
  email: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
  idCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  userName: /^[\u4e00-\u9fa5]{2,12}$/,
  bankCard: /^[1-9]\d{9,29}$/,
  phone: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
  code: /^\d{6}$/,
  password: /^\d{6}$/,
};

const FormItem: React.FC<FormItemProps> = ({ children, rule = {}, name, type, ...props }) => {
  const form = React.useContext(formContext);
  const reg = {
    pattern: pattern[type],
  };
  const onErrorClick = () => {
    const message = form.getFieldError(name).join("、");
    Toast.fail(message);
  };

  const validator = (rules: any, value: any, callback: any) => {
    const values = value.replace(/\s*/g, "");
    if (rule.required && !values.length) {
      return callback(`${rules.field} is required`);
    }
    if (rules.pattern && !rules.pattern.test(values)) {
      return callback(rules.message);
    }
  };

  const rulesArr: BaseRule[] = [{ required: true, ...reg, ...rule, validator }];
  const renderChildren = () =>
    React.Children.map(children, (child: any) =>
      name
        ? React.cloneElement(child, {
            ...form.getFieldProps(name, { rules: rulesArr }),
            error: form.getFieldError(name),
            type,
            onErrorClick,
            ...props,
          })
        : child,
    );

  return <>{renderChildren()}</>;
};
FormItem.displayName = "FormItem";
export default FormItem;
