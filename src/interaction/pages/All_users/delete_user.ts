import { UsersManager } from "../../classes/usersmanager.ts";
import { removeFromDOM } from "../../functions/add-removeFromDOM.ts";
import { showAndGetAreYouSureToDeleteModal } from "../../functions/showAndGetAreYouSureToDeleteModal.ts";
import { showCommonModal } from "../../functions/showCommonModal.ts";


const dButtons = document.querySelectorAll(".actions button[title='Delete']")
dButtons.forEach( (dbutton) => {
    dbutton.addEventListener('click', (event) => {
        const targetedElement = event.target as HTMLElement;
        const elementSelected = targetedElement.closest(".user-row") as HTMLElement;
        const cardSelected = UsersManager.getUIByHTMLElement(elementSelected);
        
        if (!cardSelected) {
        } else {
            const user = UsersManager.getUserByUI(cardSelected);
            if (!user) {
                throw new Error("Cannot get an user with this UserCard")
            } else {
                const modal = showAndGetAreYouSureToDeleteModal(user.name);
                const yesDeleteButton = modal.querySelector("#yes-delete") as HTMLButtonElement;
                const cancelDeleteButton = modal.querySelector("#cancel-delete") as HTMLButtonElement;

                yesDeleteButton.addEventListener("click", () => {
                    try {
                        UsersManager.deleteUser(user.id);
                        removeFromDOM(user.ui.element);
                        modal.close();
                        modal.remove();
                        showCommonModal("Success", `${user.name} has been deleted from the global list successfuly`);                
                    } catch (error) {
                        showCommonModal("Error", `Something went wrong trying to remove the user`);                
                        throw new Error(`Something went wrong trying to remove the user :  ${error}`)
                    };
                });

                cancelDeleteButton.addEventListener("click", () => {
                    modal.close();
                    modal.remove();
                })           
            }
        }
    })
})