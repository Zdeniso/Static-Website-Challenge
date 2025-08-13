import { vAllUsersTable, vEditUserDialog } from "../../assert-element.ts";
import { populateUserEditForm } from "../../functions/populateUserEditForm.ts";
import { UsersManager } from "../../classes/usersmanager.ts";

vAllUsersTable.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const editButton = target.closest(".actions button[title='Edit']") as HTMLButtonElement;
    if (!editButton) return;

    const elementSelected = editButton.closest(".user-row") as HTMLElement;
    const cardSelected = UsersManager.getUIByHTMLElement(elementSelected);    
    if (!cardSelected) return;
    
    const user = UsersManager.getUserByUI(cardSelected);
    if (!user) {
        throw new Error("Cannot get an user with this UserCard");
    };

    editButton.addEventListener("click", () => {       
        populateUserEditForm(user);
        vEditUserDialog.showModal();
    });
});