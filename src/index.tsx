import React from "react";
import ReactDOM from "react-dom";
import { InputItem, Button } from "antd-mobile";

import Form from "../components/Form/Form";
import FormItem from "../components/Form/FormItem";
import useForm from "../components/Form/useForm";

const Template = () => {
  const form = useForm();
  const onClick = () => {
    form.current.form.validateFields((err, values) => {
      console.log(11111);
      console.log(values);
    });
  };
  return (
    <Form initialValues={{ user: "1", user2: "2", user3: "3" }} useForm={form}>
      <FormItem name="user" type="email">
        <InputItem>email</InputItem>
      </FormItem>
      <FormItem name="bankCard" type="bankCard" rule={{ message: "银行卡格式不正确" }}>
        <InputItem> 银行卡</InputItem>
      </FormItem>
      <FormItem name="user2">
        <InputItem>姓名2</InputItem>
      </FormItem>
      <FormItem name="user3">
        <InputItem>姓名3</InputItem>
      </FormItem>
      <FormItem name="user4">
        <InputItem>姓名4</InputItem>
      </FormItem>
      <FormItem name="user6">
        <Button onClick={onClick}>按钮</Button>
      </FormItem>
    </Form>
  );
};

const App = () => <Template />;
ReactDOM.render(<App />, document.getElementById("root"));
