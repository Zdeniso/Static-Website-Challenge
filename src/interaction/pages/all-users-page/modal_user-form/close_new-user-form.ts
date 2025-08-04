import { vNewUserForm, vNewUserCancelButton, vNewUserDialog } from "../../../assert-element";

vNewUserCancelButton.addEventListener("click", () => {
    vNewUserForm.reset();
    vNewUserDialog.close()
})