const ID_BUTTON: string = "add-user-button";
const ID_DIALOG: string = "new-user__dialog";

// Récupération des éléments
const addUserButton = document.getElementById(ID_BUTTON);
const addUserDialog = document.getElementById(ID_DIALOG);

// Vérification des types + ajout d'événement si tout est OK
if (addUserButton instanceof HTMLButtonElement && addUserDialog instanceof HTMLDialogElement) {
  addUserButton.addEventListener("click", () => {
    addUserDialog.showModal();
  });
} else {
  if (!(addUserButton instanceof HTMLButtonElement)) {
    console.warn("L'ID du bouton est erroné ou l'élément n'est pas un HTMLButtonElement.");
  }
  if (!(addUserDialog instanceof HTMLDialogElement)) {
    console.warn("L'ID du dialog est erroné ou l'élément n'est pas un HTMLDialogElement.");
  }
}