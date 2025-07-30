import { v4 as uuidv4 } from 'uuid' ;
import { Status } from "./type.ts";
import { Todo } from "../classes/todo.ts";
import { ProjectCard } from './projectcard.ts';
import { User } from "./user.ts";

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

    public users: User[];
    public id: string;
    public ui!: ProjectCard;    // avec le bang `!` pour dire "je promets que ce sera défini plus tard"
    public todos: Todo[] = []; 

    constructor(data: IProject) {
        this.name = data.name;
        this.description = data.description;
        this.status = data.status;
        this.client = data.client;
        this.cost = data.cost;
        this.finishDate = data.finishDate;

        this.id = uuidv4();   
    }
   
    __equal__(data: IProject) : boolean {
        return (this.name.toLowerCase() === data.name.toLowerCase())
    }
}