import { vExportUsersListButton } from "../../assert-element.ts";
import { UsersManager } from "../../classes/usersmanager.ts";

vExportUsersListButton.addEventListener("click", () => {
    UsersManager.exportToJSON()
})