function User() {
  this.id;
  this.nom;
  this.prenom;
  this.fonction;
  this.email;
  this.tel;
  this.genre;
  this.dep;
  this.image;
  var _birthday;
  var _iban;
  var _bic;
  this.createUser = function (id, nom, prenom, birthday, adresse, secu) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.secu = secu;
    _birthday = birthday;
    return this;
  };
  this.edit = function () {
    return this;
  };
  this.setIban = function (iban) {
    _iban = iban;
  };
  this.getIban = function () {
    return _iban;
  };
  this.setBic = function (bic) {
    _bic = bic;
  };
  this.getBic = function () {
    return _bic;
  };
  this.setBirthday = function (birthday) {
    _birthday = birthday;
  };
  this.getBrthday = function () {
    return _birthday;
  };
}


