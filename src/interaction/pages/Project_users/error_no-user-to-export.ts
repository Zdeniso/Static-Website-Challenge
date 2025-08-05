import { vErrorNoUserToExportDialog, vErrorNoUserToExportGotitButton } from "../../assert-element.ts"

const dialog = vErrorNoUserToExportDialog;
const btn = vErrorNoUserToExportGotitButton;

export function showNoUserError(): void {
    dialog.showModal()
    return
}

// Go it button to leave this dialog
btn.addEventListener("click", () => {
   dialog.close()
})
