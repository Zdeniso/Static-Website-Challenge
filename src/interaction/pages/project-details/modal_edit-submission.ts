import { vEditProjectDialog, vEditProjectForm } from "../../assert-element";
import { IProject } from "../../classes/project";
import { ProjectsManager } from "../../classes/projectsmanager";
import { Status } from "../../classes/type";
         
vEditProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Récupération des informations
    const projectRawData = new FormData(vEditProjectForm);
    const data: IProject = {
        name: projectRawData.get("project-name") as string,
        description: projectRawData.get("project-description") as string,
        status: projectRawData.get("project-status") as Status,
        client: projectRawData.get("project-client") as string,
        cost: parseFloat(projectRawData.get("project-cost") as string),
        finishDate: new Date(projectRawData.get("project-finish-date") as string)
    }

    ProjectsManager.editProject(data);
    vEditProjectDialog.close();
    vEditProjectForm.reset()
})