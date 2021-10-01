var iconBuilder = function () {
  var svg = document.createElement("svg");
  svg.className = `icon icon-radio-unchecked `;
  var use = document.createElement("use");
  use.setAttribute("xlink:href", '"./svg/symbol-defs.svg#icon-radio-unchecked');
  svg.appendChild(use);

  console.log('%c⧭', 'color: #cc0036', svg);
  return svg;
};
/* <svg class="icon icon-radio-unchecked offset-2 col-4">
  <use xlink:href="./svg/symbol-defs.svg#icon-radio-unchecked"></use>
</svg>; */
