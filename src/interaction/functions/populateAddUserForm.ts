import { UsersManager } from "../classes/usersmanager";
import { getEl } from "./helperQuerySelector";

export function populateAddUserForm() {
   const motherContainer = getEl("#existing-user");

   const list = Array.from(motherContainer.children)
   list.forEach((e) => {
        if (e.getAttribute("data-class") === "new-value") {
            e.remove()
        }
   });
        
    UsersManager.usersList.forEach((e) => {
        const child = document.createElement("option");
        child.dataset.id = e.id;
        child.dataset.class = "new-value"
        child.textContent = `${e.name} - ${e.email}`;

        motherContainer.appendChild(child);
    });
}