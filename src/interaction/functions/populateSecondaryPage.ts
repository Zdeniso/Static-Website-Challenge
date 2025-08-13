import { Project } from "../classes/project";
import { formattingCost, formattingDate } from "./formattingValues";
import { getInitials } from "./setProjectInitials";
import { vProjectDetailsPage, vProjectDetailsTodoTable, vProjectUsersPage, vProjectUsersTable } from "../assert-element.ts";
import { getEl } from "./helperQuerySelector";
import { addToDOM } from "./add-removeFromDOM";

export function populateSecondaryPage(page: HTMLElement, project: Project): void {
    const id = page.getAttribute("id");
    if (!id) {
        throw new Error(`Cannot get the value of the attribute ID from ${page}`)
    };

    populatePageHeader(id, project);

    switch (page) {
        case vProjectDetailsPage:
            populateCardDetails(project);
            populateTodo(project);
            break
        case vProjectUsersPage:
            populateProjectUsersTable(project);
            break
        default:
            console.warn("Unknown page passed to populateSecondaryPage");
    }
}

function populatePageHeader(id: string, project: Project): void {
    const cardInitials = getEl(`#${id} .header__main-title-area > p:first-child`);
    const mainTitle = getEl(`#${id} .header__main-title-area > h1`);
    const mainDescription = getEl(`#${id} .header__main-title-area > p:last-child`);    
    // Get background color or project acronym from projectCard 
    const initElement = project.ui.element.querySelector(".project-card__acronym");
    if (!initElement) {
        throw new Error("Element not found");
    };
    const bColor = window.getComputedStyle(initElement).backgroundColor;

    cardInitials.textContent = getInitials(project.name);
    cardInitials.style.backgroundColor = bColor;
    mainTitle.textContent = project.name;
    mainDescription.textContent = project.description;
};

function populateCardDetails(project: Project): void {
    const cardStatus = getEl("#project-details__status > p");
    const cardCost = getEl("#project-details__cost > p");
    const cardClient = getEl("#project-details__client > p");
    const cardFinishDate = getEl("#project-details__finishdate > p");
   
    cardStatus.textContent = project.status;
    cardClient.textContent = project.client;
    cardCost.textContent = formattingCost(project.cost);
    cardFinishDate.textContent = formattingDate(project.finishDate)
};

function populateTodo(project: Project): void {
    vProjectDetailsTodoTable.innerHTML = "";
    project.todos.forEach((t) => {
        addToDOM(vProjectDetailsTodoTable, t.ui.element)
    })
}

function populateProjectUsersTable(project: Project): void {
    vProjectUsersTable.innerHTML = "";
    project.users.forEach((u) => {
        addToDOM(vProjectUsersTable, u.createClone() as HTMLElement)
    });

}