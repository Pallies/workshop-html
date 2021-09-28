function ClientUser(id, name, password) {
  this.id = id;
  this.name = name;
  this.password = password;
  this.createRowTable = function () {
    let tr = document.createElement("tr");
    this.tr= this.buildTh(tr);
  };
  this.buildTh = function (tr) {
    let row = tr;
    for (let i = 0; i < 3; i++) {
      let th = document.createElement("th");
      th.setAttribute("scope", "row");
      if (i === 0) th.nodeValue = this.id;
      if (i === 1) th.nodeValue = this.name;
      if (i === 2) th.nodeValue = this.password;
      row.appendChild(th);
    }
    return row;
  };
}
form_userAdd.onsubmit = (e) => {
  e.preventDefault();
  var lastElement = document.querySelectorAll("tr");
  var id = lastElement.length;
  var name = form_userAdd.name.value;
  var password = form_userAdd.password.value;
  var row = new ClientUser(id, name, password);
   
   console.log('%c⧭', 'color: #007300', row.tr);
};
