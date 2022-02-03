import { jsx } from "./jsx";

export const createElement = ({
  type = "div",
  jsxContent,
  className,
  style,
  onClick,
}) => {
  const element = document.createElement(type);
  element.insertAdjacentHTML("afterbegin", jsx(jsxContent));
  if (className) {
    className.split(" ").map((cn) => {
      element.classList.add(cn);
    });
  }
  if (style) {
    element.style.cssText = style;
  }
  element.onclick = onClick;
  return element;
};
