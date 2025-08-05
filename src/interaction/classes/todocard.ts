import { formattingDate } from "../functions/formattingValues.ts";
import { ITodo } from "./todo.ts";

/**
 * Represent and define TodoCard with Todo.ui property and add the element to the DOM for UI.
 * Should be instanciated
 */
export class TodoCard {
    public element: HTMLElement;
    private data: ITodo;

    constructor(data: ITodo) {
        this.data = data;
        this.element = this.createElementContainer();
        this.addInnerHTML();
    }

    private createElementContainer(): HTMLElement {
        const cardContainer = document.createElement('div');
        cardContainer.className = "todo-event";
        return cardContainer;
    };

    private addInnerHTML(): void {
        this.element.innerHTML = `
            <span class="material-icons">construction</span>
            <p>${this.data.name}</p>
            <p>${formattingDate(this.data.creationDate)}</p> 
        `;
    };

    public updateTodoContent(newData: ITodo): void {
        this.data = newData;
        this.addInnerHTML();
    };
}