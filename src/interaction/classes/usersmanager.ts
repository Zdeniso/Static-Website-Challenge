import { User, IUser } from "./User"

export class UsersManager {
    list: User[] = []
    ui: HTMLElement // (C)

    constructor (container: HTMLElement) {      // (C)
        this.ui = container
    }

    newUser(data: IUser) {
        const user = new User(data)
        this.list.push(user)
        this.ui.append(user.ui) // (C)
        return user
    }

    // USEFULL METHOD
    // npm i uuid
    getUser(id: string) {
        // 🔍 Recherche dans la liste l'utilisateur dont l'id correspond à celui passé en argument
        const user = this.list.find((user) => {
            // ✅ On compare l'id de chaque utilisateur à celui donné en paramètre
            // Si la condition est vraie (valeur True), cet utilisateur est retourné par .find()
            return user.id === id
        })

        // 🔁 Retourne l'utilisateur trouvé par .find() ou `undefined` si aucun ne correspond
        return user
    }


    deleteUser(id: string) {
        // 🔍 Recherche de l'utilisateur à supprimer grâce à son identifiant
        const user = this.getUser(id)

        // ❌ Si aucun utilisateur n’est trouvé, on arrête l’exécution de la méthode
        if (!user) { return }

        // 🧼 Suppression de l'élément HTML associé à l'utilisateur dans le DOM
        user.ui.remove()

        // 🧹 Création d'une nouvelle liste sans l'utilisateur à supprimer
        const remaining = this.list.filter((user) => {
            return user.id !== id
        })

        // 🔄 Remplacement de la liste actuelle par la version filtrée (sans l'utilisateur supprimé)
        this.list = remaining
    }

    export() {}

    importFromJSON() {}
}