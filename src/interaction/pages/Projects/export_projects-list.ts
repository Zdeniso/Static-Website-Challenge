import { vProjectsCardsExportButton } from "../../assert-element.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { exportToJSON } from "../../functions/export-importFromJSON.ts";
import { showCommonModal } from "../../functions/showCommonModal.ts";

vProjectsCardsExportButton.addEventListener("click", () => {
    exportToJSON(ProjectsManager.projectsList);
})