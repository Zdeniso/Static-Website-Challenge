import { vErrorUserDialog, vGotItButton } from "../../../assert-element.ts";

export function showUserError(): void {
    vErrorUserDialog.showModal()
}

vGotItButton.addEventListener("click", () => {
    vErrorUserDialog.close()
})
