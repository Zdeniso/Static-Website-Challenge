import { vImportUsersListButton } from "../../assert-element.ts";
import { User } from "../../classes/user.ts";
import { UsersManager } from "../../classes/usersmanager.ts";
import { importAndConvertFromJSON } from "../../functions/importFromJSON.ts";

vImportUsersListButton.addEventListener("click", () => {
    importAndConvertFromJSON(UsersManager.usersList, User)
})