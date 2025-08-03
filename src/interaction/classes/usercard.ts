import { vUserListUI } from "../assert-element.ts";
import { IUser, User } from "./user.ts";
 
export class UserCard {
    private element: HTMLElement;
    private data: IUser;

    constructor(data: IUser) {
        this.data = data;
        this.element = this.createElementContainer();
        this.addInnerHTML();
    }

    private createElementContainer(): HTMLElement {
        const cardContainer = document.createElement('div');
        cardContainer.className = "user-row";
        return cardContainer;
    }

    private addInnerHTML(): void {
        this.element.innerHTML = `
            <div class="user">
                <img src="https://i.pravatar.cc/32?img=1" alt="Avatar">
                ${this.data.name}
            </div>
            <div>${this.data.company}</div>
            <div>${this.data.role}</div>
            <div>${this.data.email}</div>
            <div class="actions">
                <button title="Edit">✏️</button>
                <button title="Delete">🗑️</button>
            </div>
        `;
    };

    public addToDOM(): void {
        vUserListUI.appendChild(this.element);
    };

    public deleteFromDOM(): void {
        this.element.remove()
    };

    public updateContent(newData: IUser): void {
        this.data = newData;
        this.addInnerHTML();
    };

    public getElement(): HTMLElement {
        return this.element;
    }
}