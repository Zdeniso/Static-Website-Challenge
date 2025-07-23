import { vExportProjectsListButton } from "../../assert-element.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";

const btn = vExportProjectsListButton;

btn.addEventListener("click", () => {
    ProjectsManager.exportToJSON()
})