import { vProjectsCardsImportButton } from "../../assert-element.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { Project } from "../../classes/project.ts";
import { importAndConvertFromJSON } from "../../functions/export-importFromJSON.ts";

vProjectsCardsImportButton.addEventListener("click", () => {
    try {
        importAndConvertFromJSON(ProjectsManager.projectsList, Project)
    } catch (error){
        console.error("Import could not be performed : ", error)
    }
})