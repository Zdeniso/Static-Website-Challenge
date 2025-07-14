import { Company, Role, IUser, User } from "../classes/User.ts"
import { UsersManager } from "../classes/UsersManager.ts"

// On déclare les variables des ID que l'on va utiliser
const ID_FORM: string = "new-user__form";
const ID_CANCEL_BUTTON: string = "cancel-button";
const ID_TABLE: string = "main__table-area";
const ID_ADD_USER_BUTTON: string = "add-user-button";
const ID_DIALOG: string = "new-user__dialog";

// Pointeurs éléments
const addUserForm = document.getElementById(ID_FORM) as HTMLFormElement | null;
const cancelButton = document.getElementById(ID_CANCEL_BUTTON) as HTMLButtonElement | null;
const tableArea = document.getElementById(ID_TABLE) as HTMLElement | null;
const addUserButton = document.getElementById(ID_ADD_USER_BUTTON) as HTMLButtonElement | null;
const addUserDialog = document.getElementById(ID_DIALOG) as HTMLDialogElement | null;

// Ouvrir la modale au clic sur "Add User"
addUserButton?.addEventListener("click", () => {
    if (addUserDialog) {
        addUserDialog.showModal();
    } else {
     console.warn("Dialog introuvable");
    }
});

// Fermer la modale au clic sur Cancel
cancelButton?.addEventListener("click", () => {
    addUserDialog?.close();
});

// Gérer la soumission du formulaire (écouteur unique)
addUserForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    // Vérifie si le formulaire est valide selon les règles HTML5 (ex: required, pattern, type, etc.)
    if (!addUserForm.checkValidity()) {
        // Si le formulaire n'est pas valide,
        // affiche automatiquement les messages d'erreur intégrés au navigateur pour chaque champ invalide
        addUserForm.reportValidity();  
        
        // Stoppe l'exécution de la fonction pour empêcher la soumission ou autres actions
        return;
    } else {

    // Récupérer les données
    const userRawData = new FormData(addUserForm);

    const userData: IUser = {
        name: userRawData.get("name") as string,
        company: userRawData.get("company") as Company,
        role: userRawData.get("role") as Role,
        email: userRawData.get("email") as string,
    };

    const user = new User(userData);

    // Ajouter l'ui de l'user dans la table
    if (tableArea) {
        tableArea.appendChild(user.ui);
    } else {
        console.warn(`Conteneur table introuvable`);
    }

    // Fermer la modale et reset le formulaire
    addUserDialog?.close();
    addUserForm.reset();
    }
})


