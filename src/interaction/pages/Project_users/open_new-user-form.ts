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
        console.error("An error occured : ", error)
        throw new Error("An unexpected error occured while trying to populate Select Element and show Add User form")
    }
});