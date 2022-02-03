export const render = (element, rootId = "root") => {
  const root = document.getElementById(rootId);
  root.insertAdjacentElement("afterbegin", element);
};
