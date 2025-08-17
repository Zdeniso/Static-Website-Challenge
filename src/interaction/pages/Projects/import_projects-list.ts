import { vProjectsCardsImportButton } from "../../assert-element.ts";
import { importProjectsFromJSONFile } from "../../functions/export-importFromJSON.ts";

vProjectsCardsImportButton.addEventListener("click", () => {
    try {
        importProjectsFromJSONFile()
    } catch (error){
        console.error("Import could not be performed : ", error)
    }
})