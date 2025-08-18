import { vAllUsersImportButton } from "../../assert-element.ts";
import { importUsersToGlobalListFromJSONFile } from "../../functions/importUsersToGlobalListFromJSONFile.ts";

vAllUsersImportButton.addEventListener("click", () => {
    try {
        importUsersToGlobalListFromJSONFile()
    } catch (error){
        console.error("Import could not be performed : ", error)
    }
})