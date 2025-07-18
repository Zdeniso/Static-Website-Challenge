import { UUIDTypes, v4 as uuidv4 } from 'uuid' ;

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
    ui: HTMLDivElement              // Intégration ui
    id: UUIDTypes                   // Intégration d'un ID généré automatiquement par UUIDv4

    constructor(data: IUser) {
        for (const key in data) {
            this[key] = data[key]
        }
        this.setUI()                // Création du bloc HTML dans la propriété "ui"
        this.setID()                // Création d'un ID généré automatiquement par UUIDv4
    }

    setUI() {
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

    setID() {
        this.id = uuidv4()
    }

    __equals__(element: User) : boolean {           // Méthode spéciale pour définir l'équivalence de 2 instances "User"
        return this.email === element.email         // Ici on ne valide que par l'email 
    }
}