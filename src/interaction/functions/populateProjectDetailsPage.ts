import { vProjectDetailsPage } from "../assert-element";
import { Project } from "../classes/project";
import { formattedCost } from "./formattedCost";
import { formattedDate } from "./formattedDate"; 
import { getInitials } from "./setProjectInitials";

export function populateProjectDetailsPage(project: Project): void {
    // Donner à la page DetailsPage l'ID du projet grâce à l'attribut data-id = ""
    vProjectDetailsPage.setAttribute("data-id", project.id);
    
    // POINTER
    const mainTitle = document.querySelector("#project-details-page header > h1") as HTMLElement;
    const mainDescription = document.querySelector("#project-details-page header > p") as HTMLElement;
    const cardTitle = document.querySelector("#project-details__title-and-description > h1") as HTMLElement;
    const cardDescription = document.querySelector("#project-details__title-and-description > p") as HTMLElement;
    const cardInitials = document.querySelector("#project-details__edit-zone > p") as HTMLElement;
    const cardStatus = document.querySelector("#project-details__status > p") as HTMLElement;
    const cardCost = document.querySelector("#project-details__cost > p") as HTMLElement;
    const cardClient = document.querySelector("#project-details__client > p") as HTMLElement;
    const cardFinishDate = document.querySelector("#project-details__finishdate > p") as HTMLElement;  
    // On veut conserver le background color des initiales => on va le chercher sur la carte data-id = project.id
    const card = document.querySelector(`.project-card[data-id="${project.id}"]`) as HTMLElement;
    const initElement = card.querySelector(".project-card__acronym") as HTMLElement;
    const bColor = window.getComputedStyle(initElement).backgroundColor;

    // MODIFY DETAILS PAGE HTML ELEMENT
    cardInitials.textContent = getInitials(project.name);
    cardInitials.style.backgroundColor = bColor; 
    mainTitle.textContent = project.name;
    mainDescription.textContent = project.description;
    cardTitle.textContent = project.name;
    cardDescription.textContent = project.description;
    cardStatus.textContent = project.status;
    cardClient.textContent = project.client;
    cardCost.textContent = formattedCost(project.cost);
    cardFinishDate.textContent = formattedDate(project.finishDate)
}