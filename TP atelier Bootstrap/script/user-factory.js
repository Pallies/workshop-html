//  Prototype d'Objet USER
function User(id,obj) {
  this.id = id;
  this.name = obj.name;
  this.firstname = obj.firstname;
  this.birthday = obj.birthday;
  this.address = obj.address;
  this.secu = obj.secu;

  this.fonction=obj?.fonction;
  this.email=obj?.email;
  this.tel=obj?.tel;
  this.genre=obj?.genre;
  this.dep=obj?.dep;
  this.image=obj?.image;
  var _iban;
  var _bic;

  this.completeInfo = function (obj) {
    for (let [key, value] of Object.entries(obj)) {
      if (this.hasOwnProperty(key)) this[key] = value;
    }
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
}
