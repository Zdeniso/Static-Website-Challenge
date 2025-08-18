import { addToDOM } from "./add-removeFromDOM.ts";
import { getEl } from "./helperQuerySelector.ts";
import { Project } from "../classes/project.ts";

export function showAndGetAreYouSureToDeleteUserModal(userName: string, projectList: Array<Project>): HTMLDialogElement {
    // Create modal
    const dialogContainer = document.createElement("dialog");
    dialogContainer.className = "common-message";

    dialogContainer.innerHTML = `
        <div>
            <p>${userName} is linked to multiple projects. Deleting this user will remove it from every project listed:</p>
            <div id="projects-list"></div>
            <div>
                <button class="btn cancel" id="cancel-delete">Cancel</button>
                <button class="btn accept" id="yes-delete">Yes</button>
            </div>
        </div>              
    `;

    // cibler l'endroit où tu veux insérer la liste
    const projectsListContainer = dialogContainer.querySelector<HTMLDivElement>("#projects-list")!;

    // Créer dynamiquement un bloc par projet
    projectList.forEach((project) => {
        const projectItem = document.createElement("p");
        projectItem.textContent = project.name;
        projectsListContainer.appendChild(projectItem);
    });

    const bodyElement = getEl<HTMLBodyElement>("body");

    // Show Modal
    addToDOM(bodyElement, dialogContainer);
    dialogContainer.showModal();

    return dialogContainer;
}
