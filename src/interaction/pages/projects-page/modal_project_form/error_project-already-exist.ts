import { vErrorProjectAlreadyExistDialog, vErrorProjectExistGotitButton } from "../../../assert-element.ts";

const dialog = vErrorProjectAlreadyExistDialog;
const btn = vErrorProjectExistGotitButton;

export function showProjectError(): void {
    dialog.showModal()
    return
}

// Go it button to leave this dialog
btn.addEventListener("click", () => {
   dialog.close()
})
