export type UserRole = "Architecte" | "Electrical Engineer" | 
    "HVAC Engineer" | "Structural Engineer" | "BIM Manager" | "Client"

export interface IUser {
    name: string
    company: string
    role: UserRole
    email: string
}

export class User implements IUser{
    // To satisfy IUser
    name: string
    company: string
    role: UserRole
    email: string

    // Class internals
    ui: HTMLDivElement

    constructor(data: IUser) {
        this.name = data.name
        this.company = data.company
        this.role = data.role
        this.email = data.email
        this.setUI()
    }

    setUI() {
        if (this.ui) {
            return
        } else {
            this.ui = document.createElement("div")
            this.ui.className = "table-row"
            this.ui.innerHTML = `
                <div class="user">
                    <img src="https://i.pravatar.cc/32?img=1" alt="Avatar">
                    ${this.name}
                </div>
                <div>${this.company}</div>
                <div>${this.role}</div>
                <div>${this.email}</div>
                <div class="actions">
                    <button title="Edit">✏️</button>
                    <button title="Delete">🗑️</button>
                </div>
            `
        }
    }
}