import { v4 as uuidv4 } from 'uuid' ;
import { Status } from "./type.ts";
import { getInitials, getRandomColor } from '../functions/setProjectInitials.ts';
import { vProjectDetailsPage } from '../assert-element.ts';
import { showPage } from '../functions/showPage.ts';
import { UsersManager } from './usersmanager.ts';

export class IProject {
    name: string;
    description: string;
    status: Status;
    client: string;
    cost: number;
    finishDate: Date;
}

export class Project implements IProject {
    public name: string;
    public description: string;
    public status: Status;
    public client: string;
    public cost: number;
    public finishDate: Date;
    public ui: HTMLElement;
    public id: string;
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
        this.ui.dataset.id = this.id;    // Création dans le but d'aller pointer cette card dans l'html et changer l'ui de la carte
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
                this.populateDetailsPage();
                showPage(vProjectDetailsPage);
                console.log("L'attribut data-id de cette page Details Page est : ", vProjectDetailsPage.getAttribute("data-id"))
            })
    }         

    private populateDetailsPage(): void {
        // Changement de variable moins longue
        const dPage = vProjectDetailsPage;
        // Donner à la page DetailsPage l'ID du projet grâce à l'attribut data-id = ""
        dPage.setAttribute("data-id", `${this.id}`);
        // Reformatage des données spéciales  
        const cost = new Intl.NumberFormat('fr-CH', { style: 'currency', currency: 'CHF' }).format(this.cost);  // Meilleur format
        const finishDate = this.finishDate.toLocaleDateString('fr-CH'); // Meilleur format

        const mainTitle = dPage.querySelector("h1") as HTMLElement;
        const mainDescription = dPage.querySelector("p") as HTMLElement;
        const cardTitle = dPage.querySelector("#project-details__title-and-description > h1") as HTMLElement;
        const cardDescription = dPage.querySelector("#project-details__title-and-description > p") as HTMLElement;
        const cardInitials = dPage.querySelector("#project-details__edit-zone > p") as HTMLElement;
        const cardStatus = dPage.querySelector("#project-details__status > p") as HTMLElement;
        const cardCost = dPage.querySelector("#project-details__cost > p") as HTMLElement;
        const cardClient = dPage.querySelector("#project-details__client > p") as HTMLElement;
        const cardFinishDate = dPage.querySelector("#project-details__finishdate > p") as HTMLElement;
        
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