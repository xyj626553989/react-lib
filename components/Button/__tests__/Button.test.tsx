import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from "..";

const fn = jest.fn();
const createElement = (properties: ButtonProps) => {
  const wrapper = render(
    <Button data-testid="button" {...properties}>
      Nice
    </Button>,
  );
  const element = wrapper.getByTestId("button");
  return element;
};

describe("test Button Component", () => {
  it("should render the correct default button", () => {
    const element = createElement({});
    expect(element).toBeTruthy();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("yh-button yh-button-primary");
  });
  it("should render the default props", () => {
    const element = createElement({ type: "default" });
    expect(element).toHaveClass("yh-button-default");
  });
  it("should render the disabled props", () => {
    const element = createElement({ disabled: true, onClick: fn });
    expect(element).toHaveClass("yh-button-disabled");
    expect(fn).not.toHaveBeenCalled();
  });
  it("button can  click", () => {
    const element = createElement({ onClick: fn });
    fireEvent.click(element);
    expect(fn).toHaveBeenCalled();
  });
});
