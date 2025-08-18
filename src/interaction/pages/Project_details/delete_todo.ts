import { vProjectDetailsTodoTable } from "../../assert-element.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { getProjectIDFromSessionStorage } from "../../functions/getProjectIDFromSessionStorage.ts";
import { showAndGetAreYouSureToDeleteModal } from "../../functions/showAndGetAreYouSureToDeleteModal.ts";
import { showCommonModal } from "../../functions/showCommonModal.ts";
import { removeFromDOM } from "../../functions/add-removeFromDOM.ts";

vProjectDetailsTodoTable.addEventListener("click", (event) => {
    const projectID = getProjectIDFromSessionStorage();
    const project = ProjectsManager.getProject(projectID);
    if (!project) {
        throw new Error("Cannot reach a project with ths ID given")
    };

    const target = event.target as HTMLElement;
    const deleteButton = target.closest(".actions button[title='Delete']") as HTMLButtonElement;
    if (!deleteButton) return;

    const elementSelected = deleteButton.closest(".todo-event") as HTMLElement;
    const cardSelected = project.getTodoUIByHTMLElement(elementSelected);
    if (!cardSelected) return;

    const todo = project.getTodoByUI(cardSelected);
    if (!todo) {
        throw new Error("Cannot get a todo item with this TodoCard");
    }

    const modal = showAndGetAreYouSureToDeleteModal(todo.name);
    const yesDeleteButton = modal.querySelector("#yes-delete") as HTMLButtonElement;
    const cancelDeleteButton = modal.querySelector("#cancel-delete") as HTMLButtonElement;

    yesDeleteButton.addEventListener("click", () => {
        try {
            project.deleteTodo(todo.id);
            removeFromDOM(elementSelected);
            modal.close();
            modal.remove();
            showCommonModal("Success", `${todo.name} has been deleted from the project ${project.name} list successfully`);
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