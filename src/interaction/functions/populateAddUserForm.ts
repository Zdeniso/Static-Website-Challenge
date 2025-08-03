import { UsersManager } from "../classes/usersmanager";
import { getEl } from "./helperQuerySelector";

export function populateAddUserForm() {
    UsersManager.usersList.forEach((e) => {
        const child = document.createElement("option");
        child.textContent = `${e.name} - ${e.email}`

        console.log(child)

        const motherContainer = getEl("#existing-user");
        motherContainer.appendChild(child)
    })
}