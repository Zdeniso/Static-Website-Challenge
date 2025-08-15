import { v4 as uuidv4 } from 'uuid' ;
import { Status } from "./type.ts";
import { Todo } from "../classes/todo.ts";
import { ProjectCard } from './projectcard.ts';
import { User } from "./user.ts";
import { vProjectDetailsTodoTable, vProjectUsersTable } from "./../assert-element.ts";
import { addToDOM } from '../functions/add-removeFromDOM.ts';
import { showCommonModal } from '../functions/showCommonModal.ts';
import { UserCard } from './usercard.ts';
import { TodoCard } from './todocard.ts';

export interface IProject {
    name: string;
    description: string;
    status: Status;
    client: string;
    cost: number;
    finishDate: Date
};

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

    getUser(id: string): User | null {
        return this.users.find((e) => e.id === id) || null
    };

    getTodo(id: string): Todo | null {
        return this.todos.find((e) => e.id === id) || null
    };

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

    deleteTodo(id: string) : void {
        const todo = this.getTodo(id);
        if (!todo) {
            console.warn("getUser: aucun todo trouvé avec cet ID :", id);
        } else {
            const newTodosList = this.todos.filter((e) => e.id != id);
            this.todos = newTodosList;
        }
    };

    getUserByUI(ui: UserCard ) : User | null {
        return this.users.find((e) => e.ui === ui) || null
    };

    getTodoByUI(ui: TodoCard ) : Todo | null {
        return this.todos.find((e) => e.ui === ui) || null
    };

    getUserUIByHTMLElement(element: HTMLElement): UserCard | null {
        const user = this.users.find((u) => u.ui.element === element || u["clones"]?.includes(element)
        );
        return user ? user.ui : null;
    }

    getTodoUIByHTMLElement(element: HTMLElement): TodoCard | null {
        const todo = this.todos.find((u) => u.ui.element === element);
        return todo ? todo.ui : null;
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