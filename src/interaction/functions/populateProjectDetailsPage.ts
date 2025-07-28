import { vProjectDetailsPage } from "../assert-element";
import { Project } from "../classes/project";
import { formattedCost } from "./formattedCost";
import { formattedDate } from "./formattedDate"; 

export function populateProjectDetailsPage(project: Project): void {
    // Donner à la page DetailsPage l'ID du projet grâce à l'attribut data-id = ""
    vProjectDetailsPage.setAttribute("data-id", project.id);

    // Reformatage des données spéciales
    const fCost = formattedCost(project.cost);
    const fFinishDate = formattedDate(project.finishDate);

    // Pointer
    const mainTitle = vProjectDetailsPage.querySelector("h1") as HTMLElement;
    const mainDescription = vProjectDetailsPage.querySelector("p") as HTMLElement;
    const cardTitle = vProjectDetailsPage.querySelector("#project-details__title-and-description > h1") as HTMLElement;
    const cardDescription = vProjectDetailsPage.querySelector("#project-details__title-and-description > p") as HTMLElement;
    const cardInitials = vProjectDetailsPage.querySelector("#project-details__edit-zone > p") as HTMLElement;
    const cardStatus = vProjectDetailsPage.querySelector("#project-details__status > p") as HTMLElement;
    const cardCost = vProjectDetailsPage.querySelector("#project-details__cost > p") as HTMLElement;
    const cardClient = vProjectDetailsPage.querySelector("#project-details__client > p") as HTMLElement;
    const cardFinishDate = vProjectDetailsPage.querySelector("#project-details__finishdate > p") as HTMLElement;
    // On est obligé d'aller chercher les initiales et background color de la carte grâce à son ID
    const card = document.querySelector(`.project-card[data-id="${project.id}"]`) as HTMLElement;
    const initElement = card.querySelector(".project-card__acronym") as HTMLElement;
    const bColor = window.getComputedStyle(initElement).backgroundColor;
    const initials = initElement.textContent;

    cardInitials.textContent = initials;
    cardInitials.style.backgroundColor = bColor; 
    mainTitle.textContent = project.name;
    mainDescription.textContent = project.description;
    cardTitle.textContent = project.name;
    cardDescription.textContent = project.description;
    cardStatus.textContent = project.status;
    cardClient.textContent = project.client;
    cardCost.textContent = fCost;
    cardFinishDate.textContent = fFinishDate
}