import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this scripts
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
