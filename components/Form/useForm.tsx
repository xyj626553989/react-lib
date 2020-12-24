import * as React from "react";
import { IForm } from "./Propstypes";

const useForm = () => {
  const form = React.useRef<{ form: IForm }>({ form: {} });
  return form;
};
export default useForm;
