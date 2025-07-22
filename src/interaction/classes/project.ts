import { UUIDTypes, v4 as uuidv4 } from 'uuid' ;
import { Status } from "./type.ts";
import { getInitials, getRandomColor } from '../functions/setProjectInitials.ts';

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
        const initials = getInitials(this.name);
        const color = getRandomColor();

        console.log(initials, color)

        // Création UI
        this.ui = document.createElement("section");
        this.ui.className = "project-card";
        this.ui.innerHTML = 
            `
            <div class="project-card__header">
                <div class="project-card__acronym" style="background-color: ${color}">${initials}</div>
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
                    <p>CHF ${this.cost}</p>
                </div>     
                <div class="project-card__values">
                    <p class="project-card__criteria">Finish Date</p>
                    <p>${this.finishDate}</p>
                </div>                             
            </div>
            `;                              
    }

    __equal__(data: IProject) : boolean {
        return (this.name === data.name)
    }
}