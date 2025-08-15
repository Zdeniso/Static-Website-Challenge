import { IProject } from "./project";
import { formattingCost, formatDateToJJMMAAAA } from "../functions/formattingValues";
import { getRandomColor } from "../functions/setProjectInitials";
import { getInitials } from "../functions/setProjectInitials";

/**
 * Represent and define ProjectCard with Project.ui property and add the element to the DOM for UI.
 * Should be instanciated
 */
export class ProjectCard {
    public element: HTMLElement;
    private data: IProject;

    constructor(data: IProject) {
        this.data = data;
        this.element = this.createElementContainer();
        this.addInnerHTML();
    }

    private createElementContainer(): HTMLElement {
        const cardContainer = document.createElement('section');
        cardContainer.className = "project-card";
        return cardContainer;
    }

    private addInnerHTML(): void {
        this.element.innerHTML = `
            <div class="project-card__header">
                <div class="project-card__acronym" style="background-color: ${getRandomColor()}">${getInitials(this.data.name)}</div>
                <div class="project-card__title-and-description " id="pcard-name-and-description">
                    <h2>${this.data.name}</h2>
                    <p>${this.data.description}</p>                  
                </div>
            </div>
            <div class="card__content">
                <div class="project-card__values" id="pcard-status">
                        <p class="project-card__criteria">Status</p>
                        <p>${this.data.status}</p>
                </div>
                <div class="project-card__values" id="pcard-client">
                    <p class="project-card__criteria">Client</p>
                    <p>${this.data.client}</p>
                </div>
                <div class="project-card__values" id="pcard-cost">
                    <p class="project-card__criteria">Cost</p>
                    <p>${formattingCost(this.data.cost)}</p>
                </div>     
                <div class="project-card__values" id="pcard-finish-date">
                    <p class="project-card__criteria">Finish Date</p>
                    <p>${formatDateToJJMMAAAA(this.data.finishDate)}</p>
                </div>                             
            </div>
        `;
    };

    public updateProjectContent(newData: IProject): void {
        this.data = newData;
        this.addInnerHTML();
    };
}