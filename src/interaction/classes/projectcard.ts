import { IProject, Project } from "./project";
import { formattedCost } from "../functions/formattedCost";
import { formattedDate } from "../functions/formattedDate";
import { getRandomColor } from "../functions/setProjectInitials";
import { getInitials } from "../functions/setProjectInitials";

export class ProjectCard {
    public htmlElement: HTMLElement;

    constructor(public project: Project) {
        this.htmlElement = this.createProjectCard();
    }

    private createProjectCard(): HTMLElement {
        const cardElement = document.createElement("section");
        cardElement.className = "project-card";
        cardElement.dataset.id = this.project.id;        // Add the project.id as a new attribute of the card with data-id = "8a2d5a..."
        cardElement.innerHTML =                  
            `
            <div class="project-card__header">
                <div class="project-card__acronym" style="background-color: ${getRandomColor()}">${getInitials(this.project.name)}</div>
                <div class="project-card__title-and-description " id="pcard-name-and-description">
                    <h2>${this.project.name}</h2>
                    <p>${this.project.description}</p>                  
                </div>
            </div>
            <div class="card__content">
                <div class="project-card__values" id="pcard-status">
                        <p class="project-card__criteria">Status</p>
                        <p>${this.project.status}</p>
                </div>
                <div class="project-card__values" id="pcard-client">
                    <p class="project-card__criteria">Role</p>
                    <p>${this.project.client}</p>
                </div>
                <div class="project-card__values" id="pcard-cost">
                    <p class="project-card__criteria">Cost</p>
                    <p>${formattedCost(this.project.cost)}</p>
                </div>     
                <div class="project-card__values" id="pcard-finish-date">
                    <p class="project-card__criteria">Finish Date</p>
                    <p>${formattedDate(this.project.finishDate)}</p>
                </div>                             
            </div>
            `;
        return cardElement  
    };
   
    public updateProjectCard(data: IProject): ProjectCard {
        // Update Storage
        const nameElement = this.htmlElement.querySelector("#pcard-name-and-description > h2") as HTMLElement;
        const accroElement = this.htmlElement.querySelector(".project-card__acronym") as HTMLElement;
        const descriptionElement = this.htmlElement.querySelector("#pcard-name-and-description > p") as HTMLElement;
        const statusElement = this.htmlElement.querySelector("#pcard-status p:nth-of-type(2)") as HTMLElement;
        const clientElement = this.htmlElement.querySelector("#pcard-client p:nth-of-type(2)") as HTMLElement;        
        const costElement = this.htmlElement.querySelector("#pcard-cost p:nth-of-type(2)") as HTMLElement;
        const finishDateElement = this.htmlElement.querySelector("#pcard-finish-date p:nth-of-type(2)") as HTMLElement;

        nameElement.textContent = data.name;
        accroElement.textContent = getInitials(data.name);
        descriptionElement.textContent = data.description; 
        statusElement.textContent = data.status;
        clientElement.textContent = data.client;
        costElement.textContent = formattedCost(data.cost);
        finishDateElement.textContent = formattedDate(data.finishDate);

        return this
    }
}