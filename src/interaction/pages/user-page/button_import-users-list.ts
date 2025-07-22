import { vImportUsersListButton, vUserListUI } from "../../assert-element.ts";
import { UsersManager } from "../../classes/usersmanager.ts";

vImportUsersListButton.addEventListener("click", () => {
    UsersManager.importFromJSON(vUserListUI)
})