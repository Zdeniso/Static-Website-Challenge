import { vProjectsCardsImportButton } from "../../assert-element.ts";
import { importProjectsFromJSONFile } from "../../functions/importProjectsFromJSONFile.ts";

vProjectsCardsImportButton.addEventListener("click", () => {
    try {
        importProjectsFromJSONFile()
    } catch (error){
        console.error("Import could not be performed : ", error)
    }
})