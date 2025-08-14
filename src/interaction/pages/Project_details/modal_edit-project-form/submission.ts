import { vEditProjectDialog, vEditProjectForm, vProjectsCardsPage } from "../../../assert-element.ts";
import { IProject } from "../../../classes/project";
import { ProjectsManager } from "../../../classes/projectsmanager";
import { Status } from "../../../classes/type";
import { showPage } from "../../../functions/showPage";
import { populateSecondaryPage } from "../../../functions/populateSecondaryPage.ts";
import { vProjectDetailsPage } from "../../../assert-element.ts";
import { getProjectIDFromSessionStorage } from "../../../functions/getProjectIDFromSessionStorage.ts";

vEditProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Récupération des informations
    const projectRawData = new FormData(vEditProjectForm);
    const data: IProject = {
        name: projectRawData.get("edit-project-name") as string,
        description: projectRawData.get("edit-project-description") as string,
        status: projectRawData.get("edit-project-status") as Status,
        client: projectRawData.get("edit-project-client") as string,
        cost: parseFloat(projectRawData.get("edit-project-cost") as string),
        finishDate: new Date(projectRawData.get("edit-project-finish-date") as string)
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

    const projectID = getProjectIDFromSessionStorage();

    const project = ProjectsManager.getProject(projectID);
    if (!project) {
        throw new Error("Cannot find project in projectList with this ID")
    };

    ProjectsManager.editProject(project.id, data);
    populateSecondaryPage(vProjectDetailsPage, project);
    vEditProjectForm.reset();
    vEditProjectDialog.close()
})