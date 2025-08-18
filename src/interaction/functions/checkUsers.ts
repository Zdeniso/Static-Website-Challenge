import { addToDOM } from "./add-removeFromDOM.ts";
import { getEl } from "./helperQuerySelector.ts";
import { removeFromDOM } from "./add-removeFromDOM.ts";
import { UsersManager } from "../classes/usersmanager.ts";
import { Project } from "../classes/project.ts";
import { vAllUsersTable } from "../assert-element.ts";

// Vérifier si tous les users des instances Project sont dans la liste globale
export async function checkUsers(project: Project) {
    for (const user of project.users || []) {
        const existingUser = UsersManager.usersList.find(u => u.id === user.id);

        if (!existingUser) {
            const choice = await displayAddUserToGlobalList(user.name);

            if (choice === "yes") {
                // Ajouter l'utilisateur globalement
                UsersManager.usersList.push(user);
                addToDOM(vAllUsersTable, user.ui.element);

                // Mettre à jour project.users directement
                const index = project.users.findIndex(u => u.id === user.id);
                if (index !== -1) project.users[index] = user;
            } else {
                // Supprimer l'utilisateur du projet si refusé
                project.users = project.users.filter(u => u.id !== user.id);
            }
        } else {
            // Réutiliser l'instance existante
            const index = project.users.findIndex(u => u.id === existingUser.id);
            if (index !== -1) project.users[index] = existingUser;
        }
    }
};

function displayAddUserToGlobalList(name: string): Promise<"yes" | "cancel"> {
    return new Promise(resolve => {
        // Create modal
        const dialogContainer = document.createElement("dialog");
        dialogContainer.className = "common-message";

        dialogContainer.innerHTML = `
            <div>
                <p>${name} doesn't exist in users global list. Since it's a requirement for being linked in project, do you want to add it in the global list?</p>
                <div>
                    <button class="btn cancel" id="cancel-add-user">Cancel</button>
                    <button class="btn accept" id="yes-add-user">Yes</button>
                </div>
            </div>              
        `;
        
        const bodyElement = getEl<HTMLBodyElement>("body");

        // Show Modal
        addToDOM(bodyElement, dialogContainer);
        dialogContainer.showModal();

        const yesButton = dialogContainer.querySelector("#yes-add-user") as HTMLButtonElement;
        const cancelButton = dialogContainer.querySelector("#cancel-add-user") as HTMLButtonElement;

        yesButton.addEventListener("click", () => {
            dialogContainer.close();
            removeFromDOM(dialogContainer);
            resolve("yes");
        });

        cancelButton.addEventListener("click", () => {
            dialogContainer.close();
            removeFromDOM(dialogContainer);
            resolve("cancel");
        });
    });
}