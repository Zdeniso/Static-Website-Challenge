import { User, IUser } from "./user.ts"
import { UUIDTypes } from 'uuid' ;

export class UsersManager {
    // ==============================================================
    // PROPERTIES
    // ==============================================================
    static userList: User[] = []

    // ==============================================================
    // CONSTRUCTOR
    // ==============================================================
    constructor(data: IUser, container: HTMLElement) {
        UsersManager.addUser(data, container);
    }

    // ==============================================================
    // METHODS
    // ==============================================================
    static addUser (dataUser: IUser, container: HTMLElement) {     
        const newUser = new User(dataUser)                                          // Créé une instances de User avec toutes les propriétés (infos + ui + id)
        if (UsersManager.userList.some((user) => user.__equals__(newUser))) {       // Vérifie que le User n'existe pas dans sa liste
            throw new Error("An user with this email already exist")                // Affiche une fenêtre d'erreur avec un message pour l'utilisateur

        } else {
            UsersManager.userList.push(newUser);                                    // Ajoute le User dans la liste (propriété "userList" de la classe UsersManager)                      
            UsersManager.userList.forEach((user) => container.appendChild(user.ui))
        }
        console.log("Utilisateur ajouté avec succès ! La nouvelle liste est : ", UsersManager.userList)
    }

    static getUser(id: UUIDTypes) {
        const user = UsersManager.userList.find((element) => element.id === id)
        if (!(user))  {
            throw new Error("No user was found with this ID. Please verify the ID.")
        } else {
            return user
        }
    }

    static deleteUser(id: UUIDTypes ) {
        const user = UsersManager.userList.find((element) => element.id === id)
        if (!(user))  {
            throw new Error("No user was found with this ID. Nothing was deleted.")
        } else {
            const newList = UsersManager.userList.filter((element) => element.id != id)
            UsersManager.userList = newList
            user.ui.remove()
            console.log("L'utilisateur : ", user.name, " a été effacé avec succès !")
        }
    }

    export() {}

    importFromJSON() {}

}

(window as any).UsersManager = UsersManager;