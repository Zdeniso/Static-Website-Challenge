import { vNewUserDialog, vAllUsersNewUserButton } from "../../assert-element";

vAllUsersNewUserButton.addEventListener("click", () => {
    vNewUserDialog.showModal()
})