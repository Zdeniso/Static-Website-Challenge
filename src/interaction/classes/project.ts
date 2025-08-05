import { v4 as uuidv4 } from 'uuid' ;
import { Status } from "./type.ts";
import { Todo } from "../classes/todo.ts";
import { ProjectCard } from './projectcard.ts';
import { User } from "./user.ts";
import { vProjectDetailsTodoTable, vProjectUsersTable } from "./../assert-element.ts";
import { addToDOM } from '../functions/add-removeFromDOM.ts';

export interface IProject {
    name: string;
    description: string;
    status: Status;
    client: string;
    cost: number;
    finishDate: Date;
};

/**
 * Represent and define Projects with method like update(), addUser(), deleteUser(), etc.
 * Should be instanciated
 */
export class Project implements IProject {
    public name: string;
    public description: string;
    public status: Status;
    public client: string;
    public cost: number;
    public finishDate: Date;
    public id: string;
    public ui: ProjectCard;
    public users: User[];    
    public todos: Todo[]; 

    /**
     * @param data Data with which the project will be create
     */
    constructor(data: IProject) {
        this.name = data.name;
        this.description = data.description;
        this.status = data.status;
        this.client = data.client;
        this.cost = data.cost;
        this.finishDate = data.finishDate;
        this.id = uuidv4();
        this.ui = new ProjectCard(data);
        this.users = [];
        this.todos = []
    };

    update(data: IProject) {
        this.name = data.name;
        this.description = data.description;
        this.status = data.status;
        this.client = data.client;
        this.cost = data.cost;
        this.finishDate = data.finishDate;
        this.ui.updateProjectContent(data)
    };

    hasSameName(data: IProject) : boolean {
        return (this.name.toLowerCase() === data.name.toLowerCase())
    };


    addUser(user: User): void {
        const alreadyExists = this.users.some(u => u.hasSameEmail(user));
        if (alreadyExists) {
            console.warn(`Email adress ${user.email} is already associated to the project`);
        } else {
            this.users.push(user);
            addToDOM(vProjectUsersTable, user.createClone());       
        }
    };
    
    addTodo(todo: Todo): void {
        const alreadyExists = this.todos.some(t => t.hasSameName(todo));
        if (alreadyExists) {
            console.warn(`Name ${todo.name} is already associated to the project`);
        } else {
            this.todos.push(todo);
            addToDOM(vProjectDetailsTodoTable, todo.ui.element);       
        }
    };

}