import { User } from "../classes/user.ts";
import { addToDOM, removeFromDOM } from "./add-removeFromDOM.ts";
import { vProjectUsersTable } from "../assert-element.ts";
import { triggerFileSelection } from "./triggerFileSelection.ts";
import { readFileAsString } from "./readFileAsString.ts";
import { parseJSONString } from "./parseJSONString.ts";
import { getProjectIDFromSessionStorage } from "./getProjectIDFromSessionStorage.ts";
import { ProjectsManager } from "../classes/projectsmanager.ts";
import { showCommonModal } from "./showCommonModal.ts";
import { UsersManager } from "../classes/usersmanager.ts";
import { vAllUsersTable } from "../assert-element.ts";
import { getEl } from "./helperQuerySelector.ts";


export async function importUsersToProjectFromJSONFile(): Promise<void> {
    try {
        // Étape 1 : L'utilisateur sélectionne un fichier
        const file = await triggerFileSelection();

        // Étape 2 : Lire le fichier en tant que chaîne JSON
        const jsonString = await readFileAsString(file);

        // Étape 3 : Parser la chaîne JSON en objet JS
        const parsedData = parseJSONString(jsonString);

        // Étape 4 : Ajouter les users au projet et globalement si nécessaire
        await addUsersToProjectFromJson(parsedData);

    } catch (error) {
        console.error("Error importing users:", error);
        showCommonModal("Error", "An error occurred during users import");
    }
};

async function addUsersToProjectFromJson(jsonParsedData: any): Promise<void> {
    const project = ProjectsManager.getProject(getProjectIDFromSessionStorage());
    if (!project) throw new Error("Cannot reach an existing project with the ID given");

    for (const rawUser of jsonParsedData) {
        const user = User.fromJSON(rawUser);

        // Vérifier si user existe dans UsersManager
        let globalUser = UsersManager.usersList.find(u => u.id === user.id);
        if (!globalUser) {
            const choice = await displayAddUserToGlobalList(user.name);
            if (choice === "yes") {
                UsersManager.usersList.push(user);
                addToDOM(vAllUsersTable, user.ui.element);
                globalUser = user;
            } else {
                // Si refusé, ne pas l'ajouter au projet
                continue;
            }
        }

        // Vérifier si user existe déjà dans project.users
        const existingInProject = project.users.find(u => u.id === globalUser.id);
        if (!existingInProject) {
            project.users.push(globalUser);
            addToDOM(vProjectUsersTable, globalUser.createClone() as HTMLElement);
        } else {
            showCommonModal("Success", `${globalUser.name} already exists in this project`);
        }
    }
}

function displayAddUserToGlobalList(name: string): Promise<"yes" | "cancel"> {
    return new Promise(resolve => {
        const dialogContainer = document.createElement("dialog");
        dialogContainer.className = "common-message";

        dialogContainer.innerHTML = `
            <div>
                <p>${name} doesn't exist in the global users list. Do you want to add it?</p>
                <div>
                    <button class="btn cancel" id="cancel-add-user">Cancel</button>
                    <button class="btn accept" id="yes-add-user">Yes</button>
                </div>
            </div>
        `;

        const bodyElement = getEl<HTMLBodyElement>("body");
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