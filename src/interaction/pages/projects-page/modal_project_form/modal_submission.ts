import { vNewProjectForm } from "../../../assert-element.ts";
import { IProject } from "../../../classes/project.ts";
import { ProjectsManager } from "../../../classes/projectsmanager.ts";
import { Status } from "../../../classes/type.ts";

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
    console.log(data)
    // const newProject = new ProjectsManager(data);
})