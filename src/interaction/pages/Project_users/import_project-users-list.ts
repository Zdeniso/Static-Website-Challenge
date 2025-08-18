import { vProjectUsersImportButton } from "../../assert-element.ts";
import { importUsersToProjectFromJSONFile } from "../../functions/importUsersToProjectFromJSONFile.ts";

vProjectUsersImportButton.addEventListener("click", () => {
    try {
        importUsersToProjectFromJSONFile()
    } catch (error){
        console.error("Import could not be performed : ", error)
    }
})