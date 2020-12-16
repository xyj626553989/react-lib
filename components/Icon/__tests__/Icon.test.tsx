import * as React from "react";
import { render } from "@testing-library/react";
import Icon, { IconProps } from "..";

const createElement = (properties?: IconProps) => {
  const wrapper = render(<Icon data-testid="Icon" {...properties} />);
  const element = wrapper.getByTestId("Icon");
  return element;
};

describe("test Icon Component", () => {
  it("render icon default size md", () => {
    const iconElement = createElement({});
    expect(iconElement).toBeTruthy();
    expect(iconElement).toBeInTheDocument();
    expect(iconElement.tagName).toEqual("svg");
    expect(iconElement).toHaveClass("yh-icon-md");
  });
  it("render icon  size lg", () => {
    const iconElement = createElement({ size: "lg" });
    expect(iconElement).toHaveClass("yh-icon-lg");
  });
});
