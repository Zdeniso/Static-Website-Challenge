import { vProjectDetailsDeleteButton, vProjectsCardsPage } from "../../assert-element";
import { ProjectsManager } from "../../classes/projectsmanager";
import { removeFromDOM } from "../../functions/removeElementFromDOM";
import { showPage } from "../../functions/showPage";

vProjectDetailsDeleteButton.addEventListener("click", () => {
    const projectID = sessionStorage.getItem("projectID");
    if (!projectID) {
        throw new Error("Cannot reach item projectID in session storage");
    };

    const project = ProjectsManager.getProject(projectID);
    if (!project) {
        throw new Error("Cannot get a project from projectList with this ID");
    };

    try {
        ProjectsManager.deleteProject(projectID);
        removeFromDOM(project.ui.element);
        showPage(vProjectsCardsPage)
    } catch (error) {
        console.error("An error occurred while deleting the project:", error);
        throw new Error("An unexpected error occurred while deleting the project.")
    }
})