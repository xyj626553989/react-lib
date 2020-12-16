import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import Button, { ButtonProps } from ".";
import "./style/index";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
export const Default = Template.bind({});
export const Gradient = Template.bind({});
export const Debounce = Template.bind({});
Primary.args = {
  type: "primary",
};
Default.args = {
  type: "default",
};
Gradient.args = {
  type: "gradient",
};
Debounce.args = {
  type: "primary",
  debounce: true,
  onClick: action("防抖"),
};
