import { v4 as uuidv4 } from 'uuid' ;
import { Status } from "./type.ts";
import { getInitials, getRandomColor } from '../functions/setProjectInitials.ts';
import { vProjectDetailsPage } from '../assert-element.ts';
import { showPage } from '../functions/showPage.ts';
import { Todo } from "../classes/todo.ts";
import { formattedCost } from '../functions/formattedCost.ts';
import { formattedDate } from '../functions/formattedDate.ts';

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
        this.setNewID();        
        this.setNewUI();
    }

    private setNewID() : void {
        this.id = uuidv4();
    }    

    private setNewUI() : void {
        // Création Card UI
        this.ui = document.createElement("section");
        this.ui.className = "project-card";
        this.ui.dataset.id = this.id;                   // Add the project.id as a new attribute of the card with data-id = "8a2d5a..."
        this.ui.innerHTML =                  
            `
            <div class="project-card__header">
                <div class="project-card__acronym" style="background-color: ${getRandomColor()}">${getInitials(this.name)}</div>
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
                    <p>${formattedCost(this.cost)}</p>
                </div>     
                <div class="project-card__values">
                    <p class="project-card__criteria">Finish Date</p>
                    <p>${formattedDate(this.finishDate)}</p>
                </div>                             
            </div>
            `;   
    }         
    
    __equal__(data: IProject) : boolean {
        return (this.name === data.name)
    }
}