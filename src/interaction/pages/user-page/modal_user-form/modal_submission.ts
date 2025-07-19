import { addUserDialog, addUserForm, userListUI } from "../../../uiElements/uiElements.ts";
import { IUser, Company, Role } from "../../../classes/user.ts";
import { assertFormElement, assertDialogElement, assertContainerElement } from "../../../functions/domChecks.ts";
import { UsersManager } from "../../../classes/usersmanager.ts";

// ===============================================================
// SOUMISSION DES INFORMATIONS LORSQU'ON APPUIE SUR LE BOUTTON "ACCEPT"
// ===============================================================
const form = assertFormElement(addUserForm);                    // Créé des constantes locales qui sont sûres d'être les bons dataType
const dialog = assertDialogElement(addUserDialog);
const usersContainer = assertContainerElement(userListUI);

form.addEventListener("submit", (e) => {
    e.preventDefault();                                         // Si le formulaire n'est pas validé par les règles HTML5, la fonction n'est pas exécutée
    const userRawData = new FormData(form);                     // Création d'une instance de FormData, classe native TS
    const userData: IUser = {                                   // Récupération des infos grâce à la méthode .get de la classe FormData
        name: userRawData.get("name") as string,
        company: userRawData.get("company") as Company,
        role: userRawData.get("role") as Role,
        email: userRawData.get("email") as string
    };

    UsersManager.addUser(userData, usersContainer)          // Création d'un nouvel utilisateur dans la base de donnée + ui dans le conteneur <div> principal

    form.reset();                                           // Reset le formulaire
    dialog.close();                                         // Fermer la modale et reset le formulaire
})
