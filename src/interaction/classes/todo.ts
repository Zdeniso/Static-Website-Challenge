import { TodoStatus, TodoType, Priority } from "./type.ts";
import { v4 as uuidv4} from "uuid";
import { TodoCard } from "./todocard.ts";

export class ITodo {
    name: string;
    description: string;
    status: TodoStatus;
    priority: Priority;
    type: TodoType;
    creationDate: Date;
    openBy: string;
    intendedTo: string;
};

/**
 * Represent and define Todo with method like update() etc.
 * Should be instanciated
 */
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
    public ui: TodoCard;

    /**
    * @param data Data with which the Todo will be create
    */
    constructor(data: ITodo) {
        this.name = data.name;
        this.description = data.description;
        this.status = data.status;
        this.priority = data.priority;
        this.type = data.type;
        this.creationDate = data.creationDate;
        this.openBy = data.openBy;
        this.intendedTo = data.intendedTo;
        this.id = uuidv4();
        this.ui = new TodoCard(data)
    };

    hasSameName(data: ITodo) : boolean {
        return (this.name.toLowerCase() === data.name.toLowerCase())
    };

    update(data: ITodo) {
        this.name = data.name;
        this.description = data.description;
        this.status = data.status;
        this.priority = data.priority;
        this.type = data.type;
        this.creationDate = data.creationDate;
        this.openBy = data.openBy;
        this.intendedTo = data.intendedTo;
        this.ui.updateTodoContent(data)
    };
}