import { addToDOM } from "./add-removeFromDOM.ts";
import { getEl } from "./helperQuerySelector.ts";

export function showAndGetAreYouSureToDeleteModal(name: string): HTMLDialogElement {
    // Create modal
    const dialogContainer = document.createElement("dialog");
    dialogContainer.className = "common-message";

    dialogContainer.innerHTML = `
        <div>
            <p>Do you really want to delete ${name} ?</p>
            <div>
                <button class="btn cancel" id="cancel-delete">Cancel</button>
                <button class="btn accept" id="yes-delete">Yes</button>
            <div>
        </div>              
    `;
    
    const bodyElement = getEl<HTMLBodyElement>("body");

    // Show Modal
    addToDOM(bodyElement, dialogContainer);
    dialogContainer.showModal();
    return dialogContainer
}