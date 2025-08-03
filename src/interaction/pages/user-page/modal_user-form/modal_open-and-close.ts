import { vAddUserButton, vCancelNewUserButton, vAddUserDialog } from "../../../assert-element.ts";
import { populateAddUserForm } from "../../../functions/populateAddUserForm.ts";

vAddUserButton.addEventListener("click", () => {
    vAddUserDialog.showModal()
})

vCancelNewUserButton.addEventListener("click", () => {
    vAddUserDialog.close();
});