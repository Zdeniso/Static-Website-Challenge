import { v4 as uuidv4 } from 'uuid' ;
import { Status } from "./type.ts";
import { Todo } from "../classes/todo.ts";
import { ProjectCard } from './projectcard.ts';
import { User } from "./user.ts";
import { vProjectDetailsTodoTable, vProjectUsersTable } from "./../assert-element.ts";
import { addToDOM } from '../functions/add-removeFromDOM.ts';
import { showCommonModal } from '../functions/showCommonModal.ts';
import { UserCard } from './usercard.ts';
import { removeFromDOM } from '../functions/add-removeFromDOM.ts';

export interface IProject {
    name: string;
    description: string;
    status: Status;
    client: string;
    cost: number;
    finishDate: Date
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
        const alreadyExists = this.users.some(u => u.id === user.id);
        if (alreadyExists) {
            showCommonModal("Error", `User name ${user.name} is already associated to the project`)
            throw new Error(`User name ${user.name} is already associated to the project with the id ${user.id}`);
        } else {
            try {
                this.users.push(user);
                addToDOM(vProjectUsersTable, user.createClone() as HTMLElement); 
                showCommonModal("Success", `${user.name} has been added to the project successfuly`)  
            } catch (error){
                showCommonModal("Error", "Something went wrong trying to add user to the project and to the DOM")
                throw new Error("Something went wrong during adding user to the userlist or the DOM")
            }    
        }
    };

    /**
     * Method which try to point an User with its ID property
     * @param id ID of the wanted User
     * @returns Return the User if found, null if not
     */
    getUser(id: string): User | null {
        return this.users.find((e) => e.id === id) || null
    };

    /**
     * Method which try to remove an user from the project
     * @param id ID of the wanted User
     */
    deleteUser(id: string) : void {
        const user = this.getUser(id);
        if (!user) {
            console.warn("getUser: aucun user trouvé avec cet ID :", id);
        } else {
            const newUsersList = this.users.filter((e) => e.id != id);
            this.users = newUsersList;
            console.log(`User has been removed successfuly from the project ${this.name}`)
        }
    };


    /**
     * Method which try to point an user from users Project property with its UI property
     * @param ui UI (UserCard) of the wanted User
     * @returns Return the User if found, null if not
     */
    getUserByUI(ui: UserCard ) : User | null {
        return this.users.find((e) => e.ui === ui) || null
    };
    
    /**
     * Method which tries to find the UserCard (UI) matching an HTMLElement.
     * Works both with the original element and any clone stored in User.clones.
     * @param element HTMLElement of the UserCard
     * @returns Return the UserCard if found, null if not
     */
    getUIByHTMLElement(element: HTMLElement): UserCard | null {
        const user = this.users.find((u) => u.ui.element === element || u["clones"]?.includes(element)
        );
        return user ? user.ui : null;
    }



    addTodo(todo: Todo): void {
        const alreadyExists = this.todos.some(t => t.name === todo.name);
        if (alreadyExists) {
            showCommonModal("Error", `${todo.name} is already associated to the project. If it's a different subject, please choose another name`)
            throw new Error(`Name ${todo.name} is already associated to the project with the id ${todo.id}`);
        } else {
            try {
                this.todos.push(todo);
                addToDOM(vProjectDetailsTodoTable, todo.ui.element);
                showCommonModal("Success", `${todo.name} has been added to the project successfuly`)            
            } catch (error) {
                showCommonModal("Error", `Something went wrong trying to add a todo item : ${error}`);
                throw new Error(`Something went wrong trying to add a todo item : ${error}`)
            }
        }
    }
}