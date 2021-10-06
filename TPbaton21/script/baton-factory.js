// Suppression des icons baton en fonction du bouton sélectionné
// la fonction prévoit une remise à zéro par l'action reset
function deleted(nb, reset = false) {
    reset ?$('#new-game').addClass('active'):$('#new-game').removeClass('active');
  for (let i = 20; i >= 0 && nb > 0; i--) {
    if (
      $(".baton_content").children().eq(i).attr("class") == "icon icon-minus" &&
      !reset
    ) {
      $(".baton_content")
        .children()
        .eq(i)
        .attr("class", "icon-display icon-minus");
      nb--;
    } else if (reset) {
      $(".baton_content").children().eq(i).attr("class", "icon icon-minus");
    }
  }
}

function addCrayonSvg(el) {
  var svgIconBaton = `
   <svg class="icon icon-minus">
        <use xlink:href="./images/crayons.svg#icon-minus">
        </use>
    </svg>
`;

  $(el).append(svgIconBaton);
}
