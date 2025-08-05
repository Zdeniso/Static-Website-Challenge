import { vNewUserForm, vNewUserCancelButton, vNewUserDialog } from "../../../assert-element.ts";

vNewUserCancelButton.addEventListener("click", () => {
    vNewUserForm.reset();
    vNewUserDialog.close()
})