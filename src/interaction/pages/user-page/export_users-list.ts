import { vExportUsersListButton } from "../../assert-element.ts";
import { UsersManager } from "../../classes/usersmanager.ts";
import { exportToJSON } from "../../functions/export-importFromJSON.ts";

vExportUsersListButton.addEventListener("click", () => {
    exportToJSON(UsersManager.usersList)
})