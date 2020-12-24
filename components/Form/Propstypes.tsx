export type GetFieldProps = (fieldName: string, rules?: { rules: BaseRule[] }) => any;
export type GetFieldError = (fieldName: string) => any;
export type resetFields = () => void;
export type validateFields = (...agr: any[]) => any;
export type setFieldsValue = (obj: any) => any;
export interface IForm {
  getFieldProps?: GetFieldProps;
  getFieldError?: GetFieldError;
  resetFields?: resetFields;
  validateFields?: validateFields;
  setFieldsValue?: setFieldsValue;
}

export type RuleType =
  | "string"
  | "number"
  | "boolean"
  | "method"
  | "regexp"
  | "integer"
  | "float"
  | "object"
  | "enum"
  | "date"
  | "url"
  | "hex"
  | "email";
export interface BaseRule {
  enum?: any;
  len?: number;
  max?: number;
  message?: string | React.ReactElement;
  min?: number;
  pattern?: RegExp;
  required?: boolean;
  type?: RuleType;
  whitespace?: boolean;
  validator?: (rule: any, value: any, callback: (error: any) => void) => any;
}

export type InputType = "email" | "idCard" | "userName" | "bankCard" | "phone" | "code" | "password";
