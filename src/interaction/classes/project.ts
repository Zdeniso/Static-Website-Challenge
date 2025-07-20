import { UUIDTypes, v4 as uuidv4 } from 'uuid' ;
import { Status, Role } from "./type.ts"

export class IProject {
    name: string;
    description: string;
    status: Status;
    role: Role;
    cost: number;
    progress: number;
}

export class Project implements IProject {
    name: string;
    description: string;
    status: Status;
    role: Role;
    cost: number;
    progress: number;
    ui: HTMLElement;
    id: UUIDTypes;

    constructor(data: IProject) {
        this.name = data.name;
        this.description = data.description;
        this.status = data.status;
        this.role = data.role;
        this.cost = data.cost;
        this.progress = data.progress;
        this.setUI();
        this.setID();
    }

    setUI() : void {
        this.ui = document.createElement("section");
        this.ui.className = "project-card";
        this.ui.innerHTML = 
            `
            <div class="project-card__header">
                <div class="project-card__acronym">DE</div>
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
                    <p>${this.role}</p>
                </div>
                <div class="project-card__values">
                    <p class="project-card__criteria">Cost</p>
                    <p>CHF ${this.cost}</p>
                </div>     
                <div class="project-card__values">
                    <p class="project-card__criteria">Estimated Progress</p>
                    <p>${this.progress}%</p>
                </div>                             
            </div>
            `;                              
    }

    setID() : void {
        this.id = uuidv4();
    }

    __equal__(data: IProject) : boolean {
        return (this.name === data.name)
    }
}