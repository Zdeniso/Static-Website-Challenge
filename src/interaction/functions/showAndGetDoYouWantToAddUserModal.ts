import { addToDOM } from "./add-removeFromDOM.ts";
import { getEl } from "./helperQuerySelector.ts";

export function showAndGetDoYouWantToAddUserModal(name: string): HTMLDialogElement {
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
    return dialogContainer
}