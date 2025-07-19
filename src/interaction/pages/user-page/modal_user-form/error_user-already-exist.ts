import { errorUserDialog, gotItButton } from "../../../uiElements/uiElements.ts";
import { assertDialogElement, assertButtonElement } from "../../../functions/domChecks.ts";

// ===============================================================
// OUVRIR LA MODALE ERROR - USER ALREADY EXIST
// ===============================================================
const eDialog = assertDialogElement(errorUserDialog);   // Créé des constantes locales qui sont sûres d'être les bons dataType
export function showUserError(): void {
    eDialog.showModal()
}

// ===============================================================
// FERMER LA MODALE ERROR - USER ALREADY EXIST
// ===============================================================
const button = assertButtonElement(gotItButton)
button.addEventListener("click", () => {
    eDialog.close()
})
