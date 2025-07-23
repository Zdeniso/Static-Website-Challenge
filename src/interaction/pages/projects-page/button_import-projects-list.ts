import { vImportProjectsListButton, vProjectListUI } from "../../assert-element.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";

const btn = vImportProjectsListButton

btn.addEventListener("click", () => {
    ProjectsManager.importFromJSON(vProjectListUI)
})