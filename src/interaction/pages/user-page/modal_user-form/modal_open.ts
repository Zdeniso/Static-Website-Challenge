import { addUserButton, addUserDialog } from "../../../uiElements/uiElements";
import { assertButtonElement, assertDialogElement } from "../../../functions/domChecks.ts";

// ===============================================================
// OUVRIR LA MODALE AU CLIC SUR "ADD USER"
// ===============================================================
const addUser = assertButtonElement(addUserButton);       // Créé des constantes locales qui sont sûres d'être les bons dataType
const dialog = assertDialogElement(addUserDialog);

addUser.addEventListener("click", () => {
    dialog.showModal()
})