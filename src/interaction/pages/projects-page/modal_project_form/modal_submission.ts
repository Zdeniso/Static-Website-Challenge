import { IProject } from "../../../classes/project.ts";
import { ProjectsManager } from "../../../classes/projectsmanager.ts";
import { Status } from "../../../classes/type.ts";
import { vNewProjectDialog, vNewProjectForm } from "../../../assert-element.ts"

vNewProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const projectRawData = new FormData(vNewProjectForm);
    const data: IProject = {
        name: projectRawData.get("project-name") as string,
        description: projectRawData.get("project-description") as string,
        status: projectRawData.get("project-status") as Status,
        client: projectRawData.get("project-client") as string,
        cost: parseFloat(projectRawData.get("project-cost") as string),
        finishDate: new Date(projectRawData.get("project-finish-date") as string)
    }
    console.log(projectRawData.get("project-finish-date"))
    // TOC assignment , if name is less than 5 characters, throw an error + window ui
    if (data.name.length < 5) {
        console.error("Project name has less than 5 chars.");
        return
        // Ajouter une fenêtre de dialog UI
    } 

    // TOC assignment , When creating the project based on the form information, give a default date in case user doesn’t specify one
    if (!projectRawData.get("project-finish-date") ) {
        data.finishDate = new Date("1999-01-01")
    }

    ProjectsManager.addProject(data)
    vNewProjectDialog.close();
    vNewProjectForm.reset()
})