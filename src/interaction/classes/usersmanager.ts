import { User, IUser } from "./user.ts"
import { UUIDTypes } from 'uuid' ;

export class UsersManager {
    // PROPERTIES
    static list: User[] = []


    // CONSTRCUTOR
    constructor(data: IUser, container: HTMLElement) {
        UsersManager.newUser(data, container);
    }


    // METHODS
    static newUser (dataUser: IUser, container: HTMLElement) {     
        const newUser = new User(dataUser)          // (B) Créé une instances de User avec toutes les propriétés (infos + ui)
        if (UsersManager.list.some((user) => user.__equals__(newUser))) {      // (C) Vérifie que le User n'existe pas dans sa liste
            console.warn("Cet utilisateur existe déjà. Rien n'a été ajouté")
            // Affiche une fenêtre d'erreur avec un message pour l'utilisateur
            return
        } else {
            UsersManager.list.push(newUser);        // (1) Ajoute le User dans la liste (propriété "userList" de la classe                       
            UsersManager.list.forEach((user) => container.appendChild(user.ui))
        }
        console.log("Utilisateur ajouté avec succès ! La nouvelle liste est : ", UsersManager.list)
    }

    static getUser(id: UUIDTypes) {
        const user = UsersManager.list.find((element) => element.id === id)
        if (!(user))  {
            console.warn("No element was found with this ID. Please verify the ID.")
            return
        } else {
            return user
        }
    }

    static deleteUser(id: UUIDTypes ) {
        const user = UsersManager.list.find((element) => element.id === id)
        if (!(user))  {
            console.warn("No element was found with this ID. Nothing was deleted.")
            return
        } else {
            const newList = UsersManager.list.filter((element) => element.id != id)
            UsersManager.list = newList
            user.ui.remove()
            console.log("L'utilisateur : ", user.name, " a été effacé avec succès !")
        }
    }

    export() {}

    importFromJSON() {}

}

(window as any).UsersManager = UsersManager;