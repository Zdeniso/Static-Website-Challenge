import { vExportUsersListButton } from "../../assert-element.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { exportToJSON } from "../../functions/export-importFromJSON.ts";
import { getProjectIDFromSessionStorage } from "../../functions/getProjectIDFromSessionStorage.ts";

vExportUsersListButton.addEventListener("click", () => {
    const projectID = getProjectIDFromSessionStorage();
    const project = ProjectsManager.getProject(projectID);
    if (!project) {
        throw new Error("Cannot reach the project in the projectList with the ID given")
    }

    exportToJSON(project.users, `${project.name}_users_list`)
})