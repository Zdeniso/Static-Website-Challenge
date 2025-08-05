import { MessageType } from "../classes/type.ts";
import { addToDOM } from "./add-removeFromDOM.ts";
import { getEl } from "./helperQuerySelector.ts";

export function showCommonModal(type: MessageType, message: string ): void {
    let prefix = "";
    const dialogContainer = document.createElement("dialog");
    dialogContainer.className = "common-message";

    switch (type) {
        case "Success":
            prefix = "✅ ";
            break
        case "Error":
            prefix = "❌ ";
            break
    }
    dialogContainer.innerHTML = `
        <div>
            <p>${prefix} ${message}</p>
            <button class="btn accept" id="common-button">Got it !</button>
        </div>              
    `;
    
    const bodyElement = getEl<HTMLBodyElement>("body");
    addToDOM(bodyElement, dialogContainer);
    dialogContainer.showModal();

    // Close
    const gotIt = getEl<HTMLButtonElement>("#common-button");
    gotIt.addEventListener("click", () => {
        dialogContainer.close();
        dialogContainer.remove()
    })
}