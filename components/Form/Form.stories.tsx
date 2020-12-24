import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import InputItem from "antd-mobile/lib/input-item";
import "antd-mobile/lib/input-item/style/index.css";
import Form from "./Form";
import FormItem from "./FormItem";

export default {
  title: "Example/Icon",
  component: Form,
} as Meta;

const Template: Story = (args) => (
  <Form>
    <FormItem name="user">
      <InputItem>姓名</InputItem>
    </FormItem>
  </Form>
);

// export const kehuguanli = Template.bind({});
// kehuguanli.args = {};
