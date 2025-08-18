import { vProjectsCardsExportButton } from "../../assert-element.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { exportDataToJSONFile } from "../../functions/exportDataToJSONFile.ts";

vProjectsCardsExportButton.addEventListener("click", () => {
    exportDataToJSONFile(ProjectsManager.projectsList);
})