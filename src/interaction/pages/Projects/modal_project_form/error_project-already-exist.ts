import { vErrorProjectExistDialog, vErrorNoProjectToExportButton } from "../../../assert-element.ts";

const dialog = vErrorProjectExistDialog;
const btn = vErrorNoProjectToExportButton;

export function showProjectError(): void {
    dialog.showModal()
    return
}

// Go it button to leave this dialog
btn.addEventListener("click", () => {
   dialog.close()
})
