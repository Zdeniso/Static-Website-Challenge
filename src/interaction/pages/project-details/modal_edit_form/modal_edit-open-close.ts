import { vEditProjectEditButton, vEditProjectDialog, vEditProjectCancelButton, vProjectDetailsPage } from "../../../assert-element.ts";
import { populateProjectEditForm } from "../../../functions/populateProjectEditForm.ts";
import { ProjectsManager } from "../../../classes/projectsmanager.ts";
import { Project } from "../../../classes/project.ts";

// Aim to open and populate with existing infos
vEditProjectEditButton.addEventListener("click", () => {
    const projectDetailsPageDataID = vProjectDetailsPage.getAttribute("data-id") as string;
    const project = ProjectsManager.getProject(projectDetailsPageDataID) as Project;

    populateProjectEditForm(project);
    vEditProjectDialog.showModal()
});

// Close dialog
vEditProjectCancelButton.addEventListener("click", () => {
    vEditProjectDialog.close()
})