// Récupère le bouton
const addUserButton = document.getElementById("add-user-button") as HTMLButtonElement | null;

// Récupère la boîte de dialogue <dialog>
const newUserDialog = document.getElementById("new-user__dialog") as HTMLDialogElement | null;

// Fonction pour afficher la modale
function showModalById(): void {
  if (addUserButton && newUserDialog) {
    addUserButton.addEventListener("click", () => {
      newUserDialog.showModal();
    });
  } else {
    console.warn("Le bouton ou la boîte de dialogue est introuvable.");
  }
}