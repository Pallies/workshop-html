// Events
var btn_comfirm = document.getElementById("modalSubmit");
var btn_create = document.getElementById("form-valid");

// Champs
var forms = document.querySelectorAll(".form-list");
var modals = document.querySelectorAll(".modal-list");
var User = {};
var errors = [];

// save in locaStore
var saveToLocalStorage = function () {
  $("#confirm_modal").modal("hide");
  // for (let [key, value] of Object.entries(User)) {
  //   localStorage.setItem(key, value);
  // }
  localStorage.setItem(`{User.name}`,JSON.stringify(User))
};

// form in Modal
var transfertInfoUserToModal = function () {
  forms.forEach((form, i) => {
    User[form.name] = form.value;
    modals[i].innerHTML = form.value;
    errors.push(formIsValide(form));
  });
  errors.forEach((e) => {
    // TODO gestion des erreurs
    console.log("%c⧭", "color: #f279ca", e);
  });
  $("#confirm_modal").modal("show");
};

// Elements to Events
btn_create.addEventListener("click", transfertInfoUserToModal);
btn_comfirm.addEventListener("click", saveToLocalStorage);

