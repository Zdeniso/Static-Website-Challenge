import { vNewUserDialog, vAllUsersNewUserButton } from "../../assert-element.ts";

vAllUsersNewUserButton.addEventListener("click", () => {
    vNewUserDialog.showModal()
})