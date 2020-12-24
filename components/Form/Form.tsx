import * as React from "react";
import { List } from "antd-mobile";
import { createForm } from "rc-form";
import { FormItemProps } from "./FormItem";
import { IForm } from "./Propstypes";
import formContext from "./FormContext";

export interface FormProps<T = any> {
  initialValues?: T;
  form?: IForm;
  useForm: React.RefObject<{ form: IForm }>;
}

const Form: React.FC<FormProps> = ({ children, form, onSubmit, initialValues, useForm }) => {
  const { setFieldsValue } = form;
  useForm.current.form = form;
  React.useEffect(() => {
    if (initialValues) {
      setFieldsValue(initialValues);
    }
  }, [initialValues]);
  const renderChildren = () =>
    React.Children.map(children, (child) => {
      const childElement = child as React.FunctionComponentElement<FormItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "FormItem") {
        // return React.cloneElement(childElement, {
        //   getFieldProps: form.getFieldProps,
        //   getFieldError: form.getFieldError,
        // });
        return child;
      }
      // eslint-disable-next-line no-console
      console.error("Warning: Menu has a child which is not MenuItem or SubMenu component");
      return null;
    });

  return (
    <formContext.Provider value={form}>
      <List>{renderChildren()}</List>
    </formContext.Provider>
  );
};

export default createForm()(Form);
