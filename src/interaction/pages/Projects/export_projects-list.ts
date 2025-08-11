import { vProjectsCardsExportButton } from "../../assert-element.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { exportToJSON } from "../../functions/export-importFromJSON.ts";

vProjectsCardsExportButton.addEventListener("click", () => {
    try {
        exportToJSON(ProjectsManager.projectsList);
    } catch (error){
        console.error("Project list could not be exported : ", error)
    }
})