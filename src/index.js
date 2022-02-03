import { createElement, render } from "./utils/";

const element = createElement({
  type: "p", //default is "div"
  jsxContent: `<div class="app">Salom dunyo: ${1 + 2} </div>`,
  className: "app data",
  style: "background: #cc7878; font-size: 24px",
  onClick: function (e) {
    this.className = "app";
  },
});

render(element, "root");
