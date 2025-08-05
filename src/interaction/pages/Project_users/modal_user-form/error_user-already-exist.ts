import { vErrorUserExistDialog, vErrorUserExistButton } from "../../../assert-element.ts";

const dialog = vErrorUserExistDialog;
const btn = vErrorUserExistButton;

export function showUserError(): void {
    dialog.showModal()
    return
}

// Go it button to leave this dialog
btn.addEventListener("click", () => {
   dialog.close()
})
