// Object
function Personne(nom, prenom, pseudo) {
  this.nom = nom;
  this.prenom = prenom;
  this.pseudo = pseudo;

  this.getNomComplet = function () {
    return `Nom : ${this.nom}  Prénom : ${this.prenom}  Pseudo : ${this.pseudo}`;
  };
}

// Function
function afficherPersonne(obj) {
  return `  Le nom de l'objet : ${obj.nom}
  Le prénom de l'objet : ${obj.prenom}
  Le pseudo de l'objet : ${obj.pseudo}
  le nom complet de l'objet : ${obj.getNomComplet()}
  `;
}

// Variables
var jules = new Personne("Jules", "LEMAIRE", "Jules77");
var paul = new Personne("Paul", "LEMAIRE", "Paul44");
jules.pseudo='jules44'
// Affichages
console.log(jules.getNomComplet());
console.log(afficherPersonne(jules));
console.log(afficherPersonne(paul));

console.log(jules.pseudo);

