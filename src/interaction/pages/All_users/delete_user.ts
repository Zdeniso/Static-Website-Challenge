import { vAllUsersTable } from "../../assert-element.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { UsersManager } from "../../classes/usersmanager.ts";
import { removeFromDOM } from "../../functions/add-removeFromDOM.ts";
import { showAndGetAreYouSureToDeleteModal } from "../../functions/showAndGetAreYouSureToDeleteModal.ts";
import { showCommonModal } from "../../functions/showCommonModal.ts";
import { Project } from "../../classes/project.ts";
import { showAndGetAreYouSureToDeleteUserModal } from "../../functions/showAndGetAreYouSureToDeleteUserModal.ts";
import { User } from "../../classes/user.ts";


vAllUsersTable.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const deleteButton = target.closest(".actions button[title='Delete']") as HTMLButtonElement;
    if (!deleteButton) return;

    const elementSelected = deleteButton.closest(".user-row") as HTMLElement;
    const cardSelected = UsersManager.getUIByHTMLElement(elementSelected);
    if (!cardSelected) return;

    const user = UsersManager.getUserByUI(cardSelected);
    if (!user) {
        throw new Error("Cannot get an user with this UserCard");
    };

    let listOfProjectLinkedToThisUser: Project[] = [];
    ProjectsManager.projectsList.forEach((p) => {
        if (p.users.some((u) => u.id === user.id)) {
            listOfProjectLinkedToThisUser.push(p);
        }
    });

    let generalModal: HTMLDialogElement;
    if (listOfProjectLinkedToThisUser.length === 0) {
        generalModal = showAndGetAreYouSureToDeleteModal(user.name)
    } else {
        generalModal = showAndGetAreYouSureToDeleteUserModal(user.name, listOfProjectLinkedToThisUser);
    }
    const yesDeleteButton = generalModal.querySelector("#yes-delete") as HTMLButtonElement;
    const cancelDeleteButton = generalModal.querySelector("#cancel-delete") as HTMLButtonElement;

    yesDeleteButton.addEventListener("click", () => {
        try {
            UsersManager.deleteUser(user.id);
            removeFromDOM(elementSelected);
            if (listOfProjectLinkedToThisUser.length !== 0) {
                listOfProjectLinkedToThisUser.forEach((p) => {
                    const userToDelete = p.getUser(user.id) as User;
                    removeFromDOM(userToDelete.ui.element)                    
                    p.deleteUser(user.id);
                })
            }
            generalModal.close();
            generalModal.remove();
            showCommonModal("Success", `${user.name} has been deleted from the global list successfully`);
        } catch (error) {
            showCommonModal("Error", `Something went wrong trying to remove the user`);
            throw new Error(`Something went wrong trying to remove the user :  ${error}`);
        }
    });

    cancelDeleteButton.addEventListener("click", () => {
        generalModal.close();
        generalModal.remove();
    });
});