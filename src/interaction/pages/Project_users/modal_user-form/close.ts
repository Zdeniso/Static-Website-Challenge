import { vAddUserDialog, vAddUserCancelButton, vAddUserForm } from "../../../assert-element.ts";

vAddUserCancelButton.addEventListener("click", () => {
    try {
        vAddUserForm.reset();
        vAddUserDialog.close()
    } catch (error) {
        console.error("Add user form failed to close : ", error)
    }
});