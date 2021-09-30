var iconBuilder = function () {
  var svg = document.createElement("svg");
  svg.className = `icon icon-radio-unchecked `;
  var use = document.createElement("use");
  use.setAttribute("xlink:href", '"./svg/symbol-defs.svg#icon-radio-unchecked');
  svg.appendChild(use);
  return svg;
};
/* <svg class="icon earth offset-2 col-4">
  <use xlink:href="./svg/symbol-defs.svg#icon-earth"></use>
</svg>; */
