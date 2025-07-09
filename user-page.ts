// Cible le <bouton>
const addUserButton = document.getElementById("add-user-button") as HTMLButtonElement | null;

// Cible le <dialog>
const newUserDialog = document.getElementById("new-user__dialog") as HTMLDialogElement | null;

if (addUserButton && newUserDialog) {
    addUserButton.addEventListener('click', () => {
        newUserDialog.showModal();
    });
} else {
    console.warn('Le bouton ou la boîte de dialogue est introuvable.');
}