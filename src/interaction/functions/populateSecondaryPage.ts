import { Project } from "../classes/project";
import { formattedCost } from "./formattedCost";
import { formattedDate } from "./formattedDate"; 
import { getInitials } from "./setProjectInitials";
import { vProjectDetailsPage, vUsersPage } from "../assert-element";

export function populateSecondaryPage(page: HTMLElement, project: Project): void {
    const id = page.getAttribute("id");
    if (!id) {
        throw new Error(`Cannot get the value of the attribute ID from ${page}`)
    };

    switch (page) {
        case vProjectDetailsPage:
            populatePageHeader(id, project);
            populateCardDetails(project);
            break;
        case vUsersPage:
            populatePageHeader(id, project);
            break;
        default:
            console.warn("Unknown page passed to populateSecondaryPage");
    }
}

function getEl<T extends HTMLElement>(selector: string): T {
    const el = document.querySelector(selector);
    if (!el) {
        throw new Error(`Element not found: ${selector}`);
    }
    return el as T;
}

function populatePageHeader(id: string, project: Project) {
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
}

function populateCardDetails(project: Project) {
    const cardStatus = getEl("#project-details__status > p");
    const cardCost = getEl("#project-details__cost > p");
    const cardClient = getEl("#project-details__client > p");
    const cardFinishDate = getEl("#project-details__finishdate > p");
   
    cardStatus.textContent = project.status;
    cardClient.textContent = project.client;
    cardCost.textContent = formattedCost(project.cost);
    cardFinishDate.textContent = formattedDate(project.finishDate)
}