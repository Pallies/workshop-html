/**
 * Calcul le nombre de baton présent
 * @returns
 */
function nbreBaton() {
  return $(".baton_content").children().filter(".icon.icon-minus").length;
}

/**  Suppression des icons baton en fonction du bouton sélectionné
la fonction prévoit une remise à zéro par l'action reset */
function deletedBaton(nb, reset = false) {
  // Boutton nouvelle partie
  if (reset) {
    $("#new-game").addClass("active");
  } else {
    $("#new-game").removeClass("active");
    $(".message-tour").text("");
  }
  // Boucle sur le nombre à modifier
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
    disabledButton();
  }
  score();
}

/** Ajoute l'icone baton sur l'élément en paramètre*/
function addCrayonSvg(el) {
  var svgIconBaton = `
   <svg class="icon icon-minus">
        <use xlink:href="./images/crayons.svg#icon-minus">
        </use>
    </svg>
`;
  $(el).append(svgIconBaton);
}
