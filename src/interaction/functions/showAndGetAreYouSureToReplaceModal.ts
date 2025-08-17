import { addToDOM } from "./add-removeFromDOM.ts";
import { getEl } from "./helperQuerySelector.ts";

export function showAndGetAreYouSureToReplaceModal(name: string): HTMLDialogElement {
    // Create modal
    const dialogContainer = document.createElement("dialog");
    dialogContainer.className = "common-message";

    dialogContainer.innerHTML = `
        <div>
            <p>Project ${name} already exist. Do you really want to delete existing one and replace it with imported one ?</p>
            <div>
                <button class="btn cancel" id="cancel-replace-project">Cancel</button>
                <button class="btn accept" id="yes-replace-project">Yes</button>
            </div>
        </div>              
    `;
    
    const bodyElement = getEl<HTMLBodyElement>("body");

    // Show Modal
    addToDOM(bodyElement, dialogContainer);
    dialogContainer.showModal();
    return dialogContainer
}