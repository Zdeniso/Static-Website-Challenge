import { vProjectUsersExportButton } from "../../assert-element.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { exportDataToJSONFile } from "../../functions/exportDataToJSONFile.ts";
import { getProjectIDFromSessionStorage } from "../../functions/getProjectIDFromSessionStorage.ts";

vProjectUsersExportButton.addEventListener("click", () => {
    const projectID = getProjectIDFromSessionStorage();
    const project = ProjectsManager.getProject(projectID);
    if (!project) {
        throw new Error("Cannot reach the project in the projectList with the ID given")
    }

    exportDataToJSONFile(project.users, `${project.name}_users_list`)
})