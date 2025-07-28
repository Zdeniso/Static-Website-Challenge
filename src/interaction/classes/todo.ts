import { TodoStatus, TodoType, Priority } from "./type.ts";
import { v4 as uuidv4} from "uuid";
import { User } from "./user.ts";

export class ITodo {
    name: string;
    description: string;
    status: TodoStatus;
    priority: Priority;
    type: TodoType;
    creationDate: Date;
    openBy: string;
    intendedTo: string;
}

export class Todo implements ITodo {
    public name: string;
    public description: string;
    public status: TodoStatus;
    public priority: Priority;
    public type: TodoType;
    public creationDate: Date;
    public openBy: string;
    public intendedTo: string;
    public id: string;
    public ui: HTMLDivElement;

    constructor(data: ITodo) {
        this.name = data.name;
        this.description = data.description;
        this.status = data.status;
        this.priority = data.priority;
        this.type = data.type;
        this.creationDate = data.creationDate;
        this.openBy = data.openBy;
        this.intendedTo = data.intendedTo;
        this.setID();
        this.setUI();
    }


    private setID() : void {
        this.id = uuidv4()
    }

    private setUI() : void {
        // Reformatage des données spéciales     
        const formattedCreationDate = this.creationDate.toLocaleDateString('fr-CH'); // Meilleur format
        
        this.ui = document.createElement("div");
        this.ui.className = "todo-event";
        this.ui.innerHTML = `
            <span class="material-icons">construction</span>
            <p>${this.name}</p>
            <p>${formattedCreationDate}</p>        
        `;   
    }

    public __equals__(element: Todo): boolean {
        return this.name === element.name;
    }
}