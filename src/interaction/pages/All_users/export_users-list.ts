import { vAllUsersExportButton } from "../../assert-element";
import { UsersManager } from "../../classes/usersmanager";
import { exportToJSON } from "../../functions/export-importFromJSON";

vAllUsersExportButton.addEventListener("click", () => {
    exportToJSON(UsersManager.usersList, "All_users_list")
})