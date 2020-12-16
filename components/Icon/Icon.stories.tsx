import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Icon, { IconProps } from ".";
import "./style/index";

export default {
  title: "Example/Icon",
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const kehuguanli = Template.bind({});
export const xiazai = Template.bind({});
kehuguanli.args = {
  size: "lg",
  type: "icon-kehuguanli",
  style: { color: "#ff0000" },
};
xiazai.args = {
  size: "lg",
  type: "icon-xiazai",
  style: { fill: "#ff0000" },
};
