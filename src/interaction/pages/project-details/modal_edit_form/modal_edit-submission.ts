import { vEditProjectDialog, vEditProjectForm, vProjectDetailsPage, vProjectsCardsPage } from "../../../assert-element";
import { IProject } from "../../../classes/project";
import { ProjectsManager } from "../../../classes/projectsmanager";
import { Status } from "../../../classes/type";
import { Project } from "../../../classes/project";
import { showPage } from "../../../functions/showPage";
         
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
    };

    // TOC assignment , if name is less than 5 characters, throw an error + window ui
    if (data.name.length < 5) {
        console.error("Project name has less than 5 chars.");
        return
    };

    // TOC assignment , When creating the project based on the form information, give a default date in case user doesn’t specify one
    if (!projectRawData.get("project-finish-date") ) {
        data.finishDate = new Date("01/01/1999")
    }

    const project = ProjectsManager.getProject(vProjectDetailsPage.getAttribute("data-id") as string) as Project;

    ProjectsManager.editProject(project, data);
    vEditProjectForm.reset();
    vEditProjectDialog.close();

    // Ca nous quitte la page Details Project et nous ramène sur la page des projets. 
    // Important car le detail Page ne se populate qu'en cliquant sur la card
    showPage(vProjectsCardsPage) 
})