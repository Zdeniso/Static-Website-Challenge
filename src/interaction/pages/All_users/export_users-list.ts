import { vAllUsersExportButton } from "../../assert-element.ts";
import { UsersManager } from "../../classes/usersmanager.ts";
import { exportDataToJSONFile } from "../../functions/exportDataToJSONFile.ts";

vAllUsersExportButton.addEventListener("click", () => {
    exportDataToJSONFile(UsersManager.usersList, "All_users_list")
})