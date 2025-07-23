import { vErrorNoProjectToExportDialog, vErrorNoProjectToExportGotitButton } from "../../assert-element.ts";

const dialog = vErrorNoProjectToExportDialog;
const btn = vErrorNoProjectToExportGotitButton;

export function showNoProjectError(): void {
    dialog.showModal()
    return
}

// Go it button to leave this dialog
btn.addEventListener("click", () => {
   dialog.close()
})
