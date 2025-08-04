import { Todo, ITodo } from "../classes/todo.ts";
import { vProjectDetailsPage, vProjectDetailsTodoTable } from "../assert-element.ts";
import { ProjectsManager } from "./projectsmanager.ts";
import { Project } from "./project.ts";

export class TodoManager {
    static todosList: Todo[] = []

    private constructor() {};

    static addTodo(todoData: ITodo): void {     // Ajoute ui, Ajoute à la liste de TodoManager, Ajoute à la liste des propriétés du projet
        const newTodoItem = new Todo(todoData);
        // Création UI
        // Ajout dans la liste TodoManager
        const alreadyExists = TodoManager.todosList.some((element) => element.__equals__(newTodoItem));
        if (alreadyExists) {
            // Ajouter une fenêtre UI "existe déjà"
            console.warn("A todo item already exist with this name");
            return
        } else {
            TodoManager.todosList.push(newTodoItem);        // Ajoute à la liste de TodoManager
            vProjectDetailsTodoTable.appendChild(newTodoItem.ui);         // Ajoute ui au conteneur TodoArea


        }
    }
}