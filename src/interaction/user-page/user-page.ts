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
} else {    // Gestion des erreurs
  if (!(addUserButton instanceof HTMLButtonElement)) {
    console.warn("This is not a HTMLButtonElement or the ID is wrong.");
  }
  if (!(addUserDialog instanceof HTMLDialogElement)) {
    console.warn("This is not a HTMLDialogElement or the ID is wrong.")
  }
}