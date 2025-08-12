import { vImportUsersListButton } from "../../assert-element.ts";
import { User } from "../../classes/user.ts";
import { importFromJSON } from "../../functions/export-importFromJSON.ts";

vImportUsersListButton.addEventListener("click", () => {
    importFromJSON(User)
})