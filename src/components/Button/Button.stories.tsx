import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import Button, { ButtonProps as ButtonProperties } from ".";
import "./style/index";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProperties> = (args) => <Button {...args}>Primary</Button>;

export const Primary = Template.bind({});

Primary.args = {
  type: "primary",
  onClick: action("button-click"),
};
