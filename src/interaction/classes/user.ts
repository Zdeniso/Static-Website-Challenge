import { v4 as uuidv4 } from 'uuid' ;
import { Company, Role } from "./type.ts"

export interface IUser {
    name: string,
    company: Company,
    role: Role,
    email: string    
}
export class User implements IUser {
    public name: string;
    public company: Company;
    public role: Role;
    public email: string;
    public id: string ;                  // Intégration d'un ID généré automatiquement par UUIDv4  
    public ui: HTMLDivElement ;         // Intégration ui

    public constructor(data: IUser) {
        this.name = data.name;
        this.company = data.company;
        this.role = data.role;
        this.email = data.email;
        this.setUI();                // Création du bloc HTML dans la propriété "ui"
        this.setID();                // Création d'un ID généré automatiquement par UUIDv4
    };

    private setUI() : void {
        this.ui = document.createElement("div");
        this.ui.className = "user-row";
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
        `;
    };

    private setID() : void {
        this.id = uuidv4()
    }

    public __equals__(element: User) : boolean {           // Méthode spéciale pour définir l'équivalence de 2 instances "User"
        return this.email === element.email         // Ici on ne valide que par l'email 
    }
}