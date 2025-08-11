import { vProjectDetailsDeleteButton, vProjectsCardsPage } from "../../assert-element.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { removeFromDOM } from "../../functions/add-removeFromDOM.ts";
import { getProjectIDFromSessionStorage } from "../../functions/getProjectIDFromSessionStorage.ts";
import { showCommonModal } from "../../functions/showCommonModal.ts";
import { showPage } from "../../functions/showPage.ts";

vProjectDetailsDeleteButton.addEventListener("click", () => {
    const projectID = getProjectIDFromSessionStorage()

    const project = ProjectsManager.getProject(projectID);
    if (!project) {
        throw new Error("Cannot get a project from projectList with this ID");
    } else {   
        try {
            ProjectsManager.deleteProject(projectID);
            removeFromDOM(project.ui.element);
            showPage(vProjectsCardsPage);
            showCommonModal("Success", `${project.name} has been deleted from the project list successfuly`)
        } catch (error) {
            showCommonModal("Error", `An error occurred while deleting the project: ${error}`);
            throw new Error("An unexpected error occurred while deleting the project.")
        }
    }
})