import { vProjectUsersAddButton, vAddUserCancelButton, vAddUserDialog } from "../../../assert-element.ts";
import { UsersManager } from "../../../classes/usersmanager.ts";
import { populateAddUserForm } from "../../../functions/populateAddUserForm.ts";

vProjectUsersAddButton.addEventListener("click", () => {
    console.log(UsersManager.usersList)
    populateAddUserForm();
    vAddUserDialog.showModal()
})

vAddUserCancelButton.addEventListener("click", () => {
    vAddUserDialog.close();
});