import { User, IUser } from "./User"

export class UsersManager {
    list: User[] = []
    ui: HTMLElement

    constructor(container: HTMLElement) {
        this.ui = container
    }

    newUser(data: IUser) : User {
        const user = new User(data)
        this.ui.append(user.ui)     // Ajoute l'ui du nouveau "User"
        this.list.push(user)    // Insert le nouveau "User" dans la liste plus haut
        return user
    }
}
