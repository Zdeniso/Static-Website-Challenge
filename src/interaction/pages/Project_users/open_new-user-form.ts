import { vProjectUsersAddButton, vAddUserDialog } from "../../assert-element.ts";
import { populateHTMLSelectElementWithUsersList } from "../../functions/populateHTMLSelectElementWithUsersList.ts";
import { UsersManager } from "../../classes/usersmanager.ts";
import { getEl } from "../../functions/helperQuerySelector.ts";

vProjectUsersAddButton.addEventListener("click", () => {
    const container = getEl<HTMLSelectElement>("#existing-user");

    try {
        populateHTMLSelectElementWithUsersList(UsersManager.usersList, container);
        vAddUserDialog.showModal()
    } catch (error) {
        console.error("Add user form failed to open : ", error)
    }
});