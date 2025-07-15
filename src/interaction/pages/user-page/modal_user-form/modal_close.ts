import { cancelButton, addUserDialog } from "../../../uiElements/uiElements.ts"
import { assertButtonElement, assertDialogElement } from "../../../functions/domChecks.ts";

// ===============================================================
// FERMER LA MODALE AU CLIC SUR "CANCEL"
// ===============================================================
const cancel = assertButtonElement(cancelButton);       // Créé des constantes locales qui sont sûres d'être les bons dataType
const dialog = assertDialogElement(addUserDialog);

cancel.addEventListener("click", () => {
    dialog.close();
});