/** Détermine la tactique
 * CàD la fonction à appeler
 */
function tourIA() {
  var batonCount = nbreBaton();
  batonCount >= 4 ? tactiquePlus4(batonCount) : tactiqueGagnante(batonCount);
}
/**
 * calcul des batons restant
 * passé en paramètre
 * @param {*} baton
 *
 * détermine le nombre de baton à supprimer
 * appel de la function deletedBaton
 */
function tactiquePlus4(baton) {
  var nbDelete = howManyDelete(baton % 4);
  deletedBaton(nbDelete);
}
/**
 * calcul des batons restant
 * passé en paramètre
 * @param {*} baton
 *
 * détermine le nombre de baton à supprimer
 * appel de la function deletedBaton
 */
function tactiqueGagnante(baton) {
  var nbDelete = baton == 3 ? 2 : 1;
  deletedBaton(nbDelete);
}
function howManyDelete(nb) {
  switch (nb % 4) {
    case 0:
      return 3;
    case 2:
      return 1;
    case 3:
      return 2;
  }
}
