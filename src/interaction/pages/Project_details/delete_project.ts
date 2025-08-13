import { vProjectDetailsDeleteButton, vProjectsCardsPage } from "../../assert-element.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { removeFromDOM } from "../../functions/add-removeFromDOM.ts";
import { getProjectIDFromSessionStorage } from "../../functions/getProjectIDFromSessionStorage.ts";
import { showAndGetAreYouSureToDeleteModal } from "../../functions/showAndGetAreYouSureToDeleteModal.ts";
import { showCommonModal } from "../../functions/showCommonModal.ts";
import { showPage } from "../../functions/showPage.ts";

vProjectDetailsDeleteButton.addEventListener("click", () => {
    const projectID = getProjectIDFromSessionStorage()

    const project = ProjectsManager.getProject(projectID);
    if (!project) {
        throw new Error("Cannot get a project from projectList with this ID");
    } else {   
        const modal = showAndGetAreYouSureToDeleteModal(project.name);
        const yesDeleteButton = modal.querySelector("#yes-delete") as HTMLButtonElement;
        const cancelDeleteButton = modal.querySelector("#cancel-delete") as HTMLButtonElement;

        yesDeleteButton.addEventListener("click", () => {
            try {
                ProjectsManager.deleteProject(projectID);
                removeFromDOM(project.ui.element);
                showPage(vProjectsCardsPage);
                modal.remove();
                showCommonModal("Success", `${project.name} has been deleted from the project list successfuly`);                
            } catch (error) {
                showCommonModal("Error", `Something went wrong trying to remove the project`);                
                throw new Error(`Something went wrong trying to remove the project :  ${error}`)
            };
        });

        cancelDeleteButton.addEventListener("click", () => {
            modal.close();
            modal.remove();
        })
    }
})