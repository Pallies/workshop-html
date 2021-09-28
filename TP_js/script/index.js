function ClientUser(id, name, password) {
  this.id = id;
  this.name = name;
  this.password = password;
  this.createRowTable = function () {
    let tr = document.createElement("tr");
    return this.buildTh(tr);
  };
  this.buildTh = function (tr) {
    for (let i = 0; i < 3; i++) {
      let th = document.createElement("th");
      th.setAttribute("scope", "row");
      if (i === 0) th.innerText = this.id;
      if (i === 1) th.innerText = this.name;
      if (i === 2) th.innerText = this.password;
      tr.appendChild(th);
    }
    return tr;
  };
}
form_userAdd.onsubmit = (e) => {
  e.preventDefault();
  var lastElement = document.querySelectorAll("tr");
  var id = lastElement.length;
  var name = form_userAdd.name.value;
  var password = form_userAdd.password.value;
  var row = new ClientUser(id, name, password);
   
   console.log('%c⧭', 'color: #007300', row.createRowTable());
};
