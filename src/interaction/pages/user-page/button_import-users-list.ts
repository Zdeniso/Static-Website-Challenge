import { importUsersListButton, userListUI } from "../../uiElements/uiElements.ts";
import { assertButtonElement, assertContainerElement } from "../../functions/domChecks.ts";
import { UsersManager } from "../../classes/usersmanager.ts";

// ===============================================================
// LANCER L'IMPORT DE LA LISTE DES USERS AU CLIC SUR LE BOUTTON IMPORT
// ===============================================================
const btn = assertButtonElement(importUsersListButton);   // Créé des constantes locales qui sont sûres d'être les bons dataType
const container = assertContainerElement(userListUI)

btn.addEventListener("click", () => {
    UsersManager.importFromJSON(container)
})