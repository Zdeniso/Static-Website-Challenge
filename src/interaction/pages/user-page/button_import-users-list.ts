import { vImportUsersListButton, vUserListUI } from "../../assert-element.ts";
import { UsersManager } from "../../classes/usersmanager.ts";

// ===============================================================
// LANCER L'IMPORT DE LA LISTE DES USERS AU CLIC SUR LE BOUTTON IMPORT
// ===============================================================

vImportUsersListButton.addEventListener("click", () => {
    UsersManager.importFromJSON(vUserListUI)
})