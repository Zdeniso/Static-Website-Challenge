import { vProjectUsersTable } from "../../assert-element.ts";
import { removeFromDOM } from "../../functions/add-removeFromDOM.ts";
import { showAndGetAreYouSureToDeleteModal } from "../../functions/showAndGetAreYouSureToDeleteModal.ts";
import { showCommonModal } from "../../functions/showCommonModal.ts";
import { getProjectIDFromSessionStorage } from "../../functions/getProjectIDFromSessionStorage.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";

vProjectUsersTable.addEventListener('click', (event) => {
    const projectID = getProjectIDFromSessionStorage();
    const project = ProjectsManager.getProject(projectID)
    if (!project) {
        throw new Error("Can't return an existing project with this ID")
    };

    const target = event.target as HTMLElement;
    const deleteButton = target.closest(".actions button[title='Delete']") as HTMLButtonElement;
    if (!deleteButton) return;

    const elementSelected = deleteButton.closest(".user-row") as HTMLElement;
    const cardSelected = project.getUserUIByHTMLElement(elementSelected);    
    if (!cardSelected) return;
    
    const user = project.getUserByUI(cardSelected);
    if (!user) {
        throw new Error("Cannot get an user with this UserCard");
    };

    const modal = showAndGetAreYouSureToDeleteModal(user.name);
    const yesDeleteButton = modal.querySelector("#yes-delete") as HTMLButtonElement;
    const cancelDeleteButton = modal.querySelector("#cancel-delete") as HTMLButtonElement;

    yesDeleteButton.addEventListener("click", () => {
        try {
            project.deleteUser(user.id);
            removeFromDOM(elementSelected);
            modal.close();
            modal.remove();
            showCommonModal("Success", `${user.name} has been removed from the project ${project.name} successfully`);
        } catch (error) {
            showCommonModal("Error", `Something went wrong trying to remove the user`);
            throw new Error(`Something went wrong trying to remove the user :  ${error}`);
        }
    });

    cancelDeleteButton.addEventListener("click", () => {
        modal.close();
        modal.remove();
    });
});