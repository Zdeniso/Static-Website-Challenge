import { UUIDTypes, v4 as uuidv4 } from 'uuid' ;
import { Status } from "./type.ts";
import { getInitials, getRandomColor } from '../functions/setProjectInitials.ts';
import { vProjectDetailsPage } from '../assert-element.ts';
import { showPage } from '../functions/showPage.ts';

export class IProject {
    name: string;
    description: string;
    status: Status;
    client: string;
    cost: number;
    finishDate: Date;
}

export class Project implements IProject {
    name: string;
    description: string;
    status: Status;
    client: string;
    cost: number;
    finishDate: Date;
    ui: HTMLElement;
    id: UUIDTypes;
    private initials: string;
    private color: string;    

    constructor(data: IProject) {
        this.name = data.name;
        this.description = data.description;
        this.status = data.status;
        this.client = data.client;
        this.cost = data.cost;
        this.finishDate = data.finishDate;
        this.setID();        
        this.setUI();
    }

    private setID() : void {
        this.id = uuidv4();
    }    

    private setUI() : void {
        // Mise en forme des initiales et couleur
        this.initials = getInitials(this.name);
        this.color = getRandomColor();

        // Reformatage des données spéciales     
        const cost = new Intl.NumberFormat('fr-CH', { style: 'currency', currency: 'CHF' }).format(this.cost);  // Meilleur format
        const finishDate = this.finishDate.toLocaleDateString('fr-CH'); // Meilleur format

        // Création Card UI
        this.ui = document.createElement("section");
        this.ui.className = "project-card";
        this.ui.innerHTML = 
            `
            <div class="project-card__header">
                <div class="project-card__acronym" style="background-color: ${this.color}">${this.initials}</div>
                <div class="project-card__title-and-description">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>                  
                </div>
            </div>
            <div class="card__content">
                <div class="project-card__values">
                        <p class="project-card__criteria">Status</p>
                        <p>${this.status}</p>
                </div>
                <div class="project-card__values">
                    <p class="project-card__criteria">Role</p>
                    <p>${this.client}</p>
                </div>
                <div class="project-card__values">
                    <p class="project-card__criteria">Cost</p>
                    <p>CHF ${cost}</p>
                </div>     
                <div class="project-card__values">
                    <p class="project-card__criteria">Finish Date</p>
                    <p>${finishDate}</p>
                </div>                             
            </div>
            `;  

            // Création et affichage Project details page UI
            this.ui.addEventListener("click", () => {
                this.populateDetailsPage(vProjectDetailsPage);
                showPage(vProjectDetailsPage)
            })
    }         

    private populateDetailsPage(container: HTMLElement): void {
        // Reformatage des données spéciales  
        const cost = new Intl.NumberFormat('fr-CH', { style: 'currency', currency: 'CHF' }).format(this.cost);  // Meilleur format
        const finishDate = this.finishDate.toLocaleDateString('fr-CH'); // Meilleur format

        const mainTitle = container.querySelector("h1") as HTMLElement;
        const mainDescription = container.querySelector("p") as HTMLElement;
        const cardTitle = container.querySelector("#project-details__title-and-description > h1") as HTMLElement;
        const cardDescription = container.querySelector("#project-details__title-and-description > p") as HTMLElement;
        const cardInitials = container.querySelector("#project-details__edit-zone > p") as HTMLElement;
        const cardStatus = container.querySelector("#project-details__status > p") as HTMLElement;
        const cardCost = container.querySelector("#project-details__cost > p") as HTMLElement;
        const cardClient = container.querySelector("#project-details__client > p") as HTMLElement;
        const cardFinishDate = container.querySelector("#project-details__finishdate > p") as HTMLElement;

        mainTitle.textContent = this.name;
        mainDescription.textContent = this.description;
        cardTitle.textContent = this.name;
        cardDescription.textContent = this.description;
        cardInitials.textContent = this.initials;
        cardInitials.style.backgroundColor = this.color; 
        cardStatus.textContent = this.status;
        cardClient.textContent = this.client;
        cardCost.textContent = cost;
        cardFinishDate.textContent = finishDate
    }
    
    __equal__(data: IProject) : boolean {
        return (this.name === data.name)
    }
}