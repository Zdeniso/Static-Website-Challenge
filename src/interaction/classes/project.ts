import { v4 as uuidv4 } from 'uuid' ;
import { Status } from "./type.ts";
import { Todo } from "../classes/todo.ts";
import { ProjectCard } from './projectcard.ts';
import { User, IUser } from "./user.ts";
import { addToDOM } from '../functions/addElementToDOM.ts';

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

/*
    addNewUser(userData: IUser): void {
        const alreadyExists = this.users.some(u => u.hasSameEmail(userData));
        if (alreadyExists) {
            console.warn(`L'adresse email ${userData.email} est déjà associé à ce projet.`);
        } else {
            const newUser = new User(userData);
            this.users.push(newUser);
            addToDOM(newUser.ui.element);
            console.log(`User ${newUser.name} has been added successfuly to the project`)            
        }
    };
*/
}