import { vProjectsCardsImportButton, vProjectsCardsTable } from "../../assert-element.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { Project } from "../../classes/project.ts";
import { importAndConvertFromJSON } from "../../functions/importFromJSON.ts";

const btn = vProjectsCardsImportButton

btn.addEventListener("click", () => {
    importAndConvertFromJSON(ProjectsManager.projectsList, Project)
})