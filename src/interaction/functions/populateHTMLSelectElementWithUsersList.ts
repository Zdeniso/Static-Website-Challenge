import { User } from "../classes/user.ts";

export function populateHTMLSelectElementWithUsersList(list: Array<User>, container: HTMLSelectElement ) {
   const existingChildren = Array.from(container.children)
   existingChildren.forEach((e) => {
        if (e.getAttribute("data-class") === "temporary") {
            e.remove()
        }
   });
        
    list.forEach((e) => {
        const child = document.createElement("option");
        child.dataset.id = e.id;
        child.dataset.class = "temporary"
        child.textContent = `${e.name} - ${e.email}`;

        container.appendChild(child);
    });
}