import {v4 as uuidv4 } from 'uuid'

export type Company = "Losinger-Marazzi" | "Implenia" | "Vinci-Construction"
export type Role = "Architect" | "Electrical Engineer" | "HVAC Engineer" | 
    "Structural Engineer" | "BIM Manager" | "Client"

export interface IUser {
    name: string,
    company: Company,
    role: Role,
    email: string    
}
export class User implements IUser {
    name: string
    company: Company
    role: Role
    email: string
    id: string      // Usefull method chapter
    ui: HTMLDivElement              // Intégration ui

    constructor(data: IUser) {
        this.name = data.name
        this.company = data.company
        this.role = data.role
        this.email = data.email
        this.id = uuidv4()  // Usefull method chapter
        this.setUI()                // Intégration ui
    }

    setUI() {
        if (this.ui) {
            return
        } else {
            this.ui = document.createElement("div")
            this.ui.className = "user-row"
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
