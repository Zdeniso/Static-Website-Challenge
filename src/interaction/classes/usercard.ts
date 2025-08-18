import { IUser } from "./user.ts";

export class UserCard {
    public element: HTMLElement;
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

    public updateUserContent(newData: IUser): void {
        this.data = newData;
        this.addInnerHTML();
    };
}