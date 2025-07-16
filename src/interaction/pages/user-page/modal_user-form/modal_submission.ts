import { addUserDialog, addUserForm, userListUI } from "../../../uiElements/uiElements.ts"
import { IUser, Company, Role } from "../../../classes/user.ts"
import { assertFormElement, assertDialogElement, assertContainerElement } from "../../../functions/domChecks.ts";
import { UsersManager } from "../../../classes/usersmanager.ts";

// ===============================================================
// SOUMISSION DES INFORMATIONS LORSQU'ON APPUIE SUR LE BOUTTON "ACCEPT"
// ===============================================================
const form = assertFormElement(addUserForm);                    // Créé des constantes locales qui sont sûres d'être les bons dataType
const dialog = assertDialogElement(addUserDialog);
const usersContainer = assertContainerElement(userListUI);

form.addEventListener("submit", (e) => {
    e.preventDefault();                              // si l'évènement n'est pas explicitement géré, l'action par défaut ne devrait pas être exécutée
    const userRawData = new FormData(form);                 // FormData classe native TS
    const userData: IUser = {
        name: userRawData.get("name") as string,
        company: userRawData.get("company") as Company,
        role: userRawData.get("role") as Role,
        email: userRawData.get("email") as string
    };

    const newUser = new UsersManager(userData, usersContainer)              // Création d'un nouvel utilisateur dans la base de donnée

    form.reset();                                           // Reset le formulaire
    dialog.close();                                         // Fermer la modale et reset le formulaire
})
