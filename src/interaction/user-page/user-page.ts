// Récupérer le bouton "Add user"
const addUserButton = document.getElementById("add-user-button") as HTMLButtonElement | null;

// Récupérer la boîte de dialogue (dialog)
const userDialog = document.getElementById("new-user__dialog") as HTMLDialogElement | null;

// Attacher l'événement de clic
if (addUserButton && userDialog) {
  addUserButton.addEventListener("click", () => {
    userDialog.showModal();
  });
} else {
  console.warn("Bouton ou boîte de dialogue introuvable");
}
