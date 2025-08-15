import { vProjectsCardsImportButton } from "../../assert-element.ts";
import { Project } from "../../classes/project.ts";
import { importFromJSON } from "../../functions/export-importFromJSON.ts";

vProjectsCardsImportButton.addEventListener("click", () => {
    try {
        importFromJSON(Project)
    } catch (error){
        console.error("Import could not be performed : ", error)
    }
})