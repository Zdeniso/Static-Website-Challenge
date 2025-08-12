import { v4 as uuidv4 } from 'uuid' ;
import { Company, Role } from "./type.ts";
import { UserCard } from "./usercard.ts";

export interface IUser {
    name: string,
    company: Company,
    role: Role,
    email: string, 
};

/**
 * Represent and define Users with method like update() etc.
 * Should be instanciated
 */
export class User implements IUser {
    public name: string;
    public company: Company;
    public role: Role;
    public email: string;
    public id: string ;
    public ui: UserCard ;

    private clones: HTMLElement[] = []; 

    /**
    * @param data Data with which the User will be create
    */
    constructor(data: IUser) {
        this.name = data.name;
        this.company = data.company;
        this.role = data.role;
        this.email = data.email;
        this.id = uuidv4();
        this.ui = new UserCard(data)
    };

    hasSameEmail(element: IUser): boolean {          
        return (this.email.toLowerCase() === element.email.toLowerCase())
    };

    update(data: IUser) {
        this.name = data.name;
        this.company = data.company;
        this.role = data.role;
        this.email = data.email;
        this.ui.updateUserContent(data)
        this.updateClones();
    };   

    /**
     * Renvoie un clone de l'élément UserCard pour affichage multiple.
     * Le clone est stocké pour pouvoir être mis à jour en cas de modification des données.
     */
    createClone(): HTMLElement | undefined {
        const clone = this.ui.element.cloneNode(true) as HTMLElement;
        const deleteButton = clone.querySelector('button[title="Edit"]');
        if (!deleteButton) {
            return
        } else {  
            deleteButton.remove();
            this.clones.push(clone);
            return clone;
        }
    }

    /**
     * Met à jour tous les clones dans le DOM en recollant le innerHTML à jour
     */
    private updateClones(): void {
        for (const clone of this.clones) {
            clone.innerHTML = this.ui.element.innerHTML;
        }
    }
}


