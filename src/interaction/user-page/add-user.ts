import { Company, Role, IUser } from "../classes/User.ts"
import { UsersManager } from "../classes/UsersManager.ts"

// On déclare les variables des ID que l'on va utiliser
const ID_FORM: string = "new-user__form";
const ID_CANCEL_BUTTON: string = "cancel-button";
const ID_ADD_USER_BUTTON: string = "add-user-button";
const ID_DIALOG: string = "new-user__dialog";
const ID_USER_LIST: string = "users-list";

// Pointeurs éléments
const addUserForm = document.getElementById(ID_FORM) as HTMLFormElement | null;
const cancelButton = document.getElementById(ID_CANCEL_BUTTON) as HTMLButtonElement | null;
const addUserButton = document.getElementById(ID_ADD_USER_BUTTON) as HTMLButtonElement | null;
const addUserDialog = document.getElementById(ID_DIALOG) as HTMLDialogElement | null;
const userListUI = document.getElementById(ID_USER_LIST) as HTMLElement | null; // (C)

// OUVRIR LA MODALE AU CLIC SUR "ADD USER"
addUserButton?.addEventListener("click", () => {
    if (addUserDialog) {
        addUserDialog.showModal();
    } else {
     console.warn("Dialog introuvable");
    }
});

// FERMER LA MODALE AU CLIC SUR "CANCEL"
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

    // (A) NEW : Création d'une instance de UsersManager
    if (!(userListUI instanceof HTMLElement)) {     // Gestion si valeur null
        console.warn("Conteneur de la liste des utilisateurs introuvable.");
        return
    }
    const userManager = new UsersManager(userListUI)
    // (B) NEW : Usage de la méthode newUser qui 
        // (1) Créé une instance de User 
        // (2) Ajoute cette instance dans la propriété de UsersManager : list
        // (3C) Ajoute l'ui lié à l'utilisateur dans le conteneur "container"
        // (4) Retourne la valeur du nouvel utilisateur
    const newUser = userManager.newUser(userData)

    // (C) Création de l'ui en fonction de cette liste de User



    // OLD : Création de l'instance de la classe User
    // const user = new User(userData);

    // OLD : Ajouter l'ui de l'user dans la table
    // if (tableArea) {
    //     tableArea.appendChild(user.ui);
    // } else {
    //     console.warn(`Conteneur table introuvable`);
    // }

    // Fermer la modale et reset le formulaire
    addUserDialog?.close();
    addUserForm.reset();
    }
})


