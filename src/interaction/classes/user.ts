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

    update(data: IUser) {
        this.name = data.name;
        this.company = data.company;
        this.role = data.role;
        this.email = data.email;
        this.ui.updateUserContent(data)
    };   

    hasSameEmail(element: IUser): boolean {          
        return (this.email.toLowerCase() === element.email.toLowerCase())
    };
}


