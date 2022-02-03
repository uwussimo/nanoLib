const jsx = (html) => {
  return `${html}`;
};

const createElement = ({ type = "div", jsxContent, className, style }) => {
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
  return element;
};

const render = (element, rootId = "root") => {
  const root = document.getElementById(rootId);

  root.insertAdjacentElement("afterbegin", element);
};

render(
  createElement(
    {
      type: "p", //default is "div"
      jsxContent: `<div class="app">Salom dunyo: ${1 + 2}</div>`,
      className: "app data",
      style: "background: #cc7878; font-size: 24px",
    },
    "root"
  )
);
