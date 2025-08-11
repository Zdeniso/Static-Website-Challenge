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
        const backgroundColor = this.defineBackgroundColorAccordingToTodoStatus()
        this.element.innerHTML = `
            <span class="material-icons" style="background-color: ${backgroundColor}">construction</span>
            <p>${this.data.name}</p>
            <p>${formattingDate(this.data.creationDate)}</p> 
        `;
    };

    public updateTodoContent(newData: ITodo): void {
        this.data = newData;
        this.addInnerHTML();
    };

    private defineBackgroundColorAccordingToTodoStatus(): string {
        if (this.data.status === "Open") {
            return "rgba(72, 146, 29, 1)"
        }
        return "rgba(189, 41, 41, 1)"
    }
}