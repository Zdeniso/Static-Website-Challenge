import { vErrorUserAlreadyExistDialog, vErrorUserExistGotitButton } from "../../../assert-element.ts";

const dialog = vErrorUserAlreadyExistDialog;
const btn = vErrorUserExistGotitButton;

export function showUserError(): void {
    dialog.showModal()
    return
}

// Go it button to leave this dialog
btn.addEventListener("click", () => {
   dialog.close()
})
