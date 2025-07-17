import { exportUsersListButton } from "../../uiElements/uiElements.ts";
import { assertButtonElement } from "../../functions/domChecks.ts";
import { UsersManager } from "../../classes/usersmanager.ts";

// ===============================================================
// LANCER LE TELECHARGEMENT AU CLIC SUR LE BOUTTON EXPORT
// ===============================================================
const btn = assertButtonElement(exportUsersListButton);   // Créé des constantes locales qui sont sûres d'être les bons dataType

btn.addEventListener("click", () => {
    UsersManager.exportToJSON()
})