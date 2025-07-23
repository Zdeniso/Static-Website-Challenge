import { vAddUserDialog, vAddUserForm, vUserListUI } from "../../../assert-element.ts";
import { Company, Role } from "../../../classes/type.ts";
import { IUser } from "../../../classes/user.ts";
import { UsersManager } from "../../../classes/usersmanager.ts";

// ===============================================================
// SOUMISSION DES INFORMATIONS LORSQU'ON APPUIE SUR LE BOUTTON "ACCEPT"
// ===============================================================

vAddUserForm.addEventListener("submit", (e) => {
    e.preventDefault();                                         // Si le formulaire n'est pas validé par les règles HTML5, la fonction n'est pas exécutée
    const userRawData = new FormData(vAddUserForm);                     // Création d'une instance de FormData, classe native TS
    const userData: IUser = {                                   // Récupération des infos grâce à la méthode .get de la classe FormData
        name: userRawData.get("name") as string,
        company: userRawData.get("company") as Company,
        role: userRawData.get("role") as Role,
        email: userRawData.get("email") as string
    };

    UsersManager.addUser(userData, vUserListUI)          // Création d'un nouvel utilisateur dans la base de donnée + ui dans le conteneur <div> principal

    vAddUserForm.reset();                                           // Reset le formulaire
    vAddUserDialog.close();                                         // Fermer la modale et reset le formulaire
})
