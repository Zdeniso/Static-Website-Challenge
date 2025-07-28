import { v4 as uuidv4 } from 'uuid' ;
import { Status } from "./type.ts";
import { getInitials, getRandomColor } from '../functions/setProjectInitials.ts';
import { vProjectDetailsPage } from '../assert-element.ts';
import { showPage } from '../functions/showPage.ts';
import { Todo } from "../classes/todo.ts";

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
    public id: string;
    public ui: HTMLElement;
    public todos: Todo[] = [];
    
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
        const formattedCost = new Intl.NumberFormat('fr-CH', { style: 'currency', currency: 'CHF' }).format(this.cost);  // Meilleur format
        const formattedFinishDate = this.finishDate.toLocaleDateString('fr-CH'); // Meilleur format

        // Création Card UI
        this.ui = document.createElement("section");
        this.ui.className = "project-card";
        this.ui.dataset.id = this.id;
        this.ui.innerHTML =                 // data-id permettra de se faire pointer pour récupérer this.color et this initials dans le populate du detailsPage 
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
                    <p>${formattedCost}</p>
                </div>     
                <div class="project-card__values">
                    <p class="project-card__criteria">Finish Date</p>
                    <p>${formattedFinishDate}</p>
                </div>                             
            </div>
            `;  

            console.log("La carte créé est : ", this.ui)

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

        // On est obligé d'aller chercher les initiales et background color de la carte grâce à son ID
        const card = document.querySelector(`.project-card[data-id="${this.id}"]`) as HTMLElement;
        const initElement = card.querySelector(".project-card__acronym") as HTMLElement;
        const bColor = window.getComputedStyle(initElement).backgroundColor;
        const initials = initElement.textContent;

        cardInitials.textContent = initials;
        cardInitials.style.backgroundColor = bColor; 

        mainTitle.textContent = this.name;
        mainDescription.textContent = this.description;
        cardTitle.textContent = this.name;
        cardDescription.textContent = this.description;
        cardStatus.textContent = this.status;
        cardClient.textContent = this.client;
        cardCost.textContent = cost;
        cardFinishDate.textContent = finishDate

        // Todos list
        if (this.todos) {
            this.todos.forEach((element) => {
                const formattedCreationDate = element.creationDate.toLocaleDateString('fr-CH'); // Meilleur format
                element.ui = document.createElement("div");
                element.ui.className = "todo-event";
                element.ui.innerHTML = `
                    <span class="material-icons">construction</span>
                    <p>${element.name}</p>
                    <p>${formattedCreationDate}</p>        
                `;
            })
        }
    }
    
    __equal__(data: IProject) : boolean {
        return (this.name === data.name)
    }
}