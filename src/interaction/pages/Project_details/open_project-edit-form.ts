import { vProjectDetailsEditButton, vEditProjectDialog } from "../../assert-element.ts";
import { populateProjectEditForm } from "../../functions/populateProjectEditForm.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";

vProjectDetailsEditButton.addEventListener("click", () => {
    const projectID = sessionStorage.getItem("projectID");
    if (!projectID) {
        throw new Error("Cannot reach an item called projectID in session storage")
    };
    console.log(projectID)

    const project = ProjectsManager.getProject(projectID);
    if (!project) {
        throw new Error("Cannot get a project from projectList with this ID")
    };
    console.log(project)
    
    populateProjectEditForm(project);
    vEditProjectDialog.showModal();
});