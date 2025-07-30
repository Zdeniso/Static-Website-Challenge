import { User } from "./user.ts";
 
export class UserCard {
    public htmlElement: HTMLElement

    constructor(public user: User) {
        this.htmlElement = this.createUserCard()
    }

    private createUserCard(): HTMLElement {
        const userCard = document.createElement("div");
        userCard.className = "user-row";
        userCard.innerHTML = `
            <div class="user">
                <img src="https://i.pravatar.cc/32?img=1" alt="Avatar">
                ${this.user.name}
            </div>
            <div>${this.user.company}</div>
            <div>${this.user.role}</div>
            <div>${this.user.email}</div>
            <div class="actions">
                <button title="Edit">✏️</button>
                <button title="Delete">🗑️</button>
            </div>
        `;
        return userCard
    }
}