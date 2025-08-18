import { ITodo } from "./todo.ts";

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
            <p>${this.data.type}</p>
            <div class="actions">
                <button title="Edit">✏️</button>
                <button title="Delete">🗑️</button>
            </div> 
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